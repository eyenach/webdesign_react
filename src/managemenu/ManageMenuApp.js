import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

class ManageMenuApp extends Component {
    constructor(props) {
        super(props);

        // initial state
        this.state = {
            recipes: [],
            ui: {
                menuOpen: false,
                displayedRecipeId: null,
                editDisplayedRecipe: false,
                saveErrors: null
            }
        }

        this.displayRandomRecipe = this.displayRandomRecipe.bind(this);
        this.handleMenuShow = this.handleMenuShow.bind(this);
        this.handleMenuHide = this.handleMenuHide.bind(this);
        this.handleNewRecipeAddButton = this.handleNewRecipeAddButton.bind(this);
        this.handleRecipeSelect = this.handleRecipeSelect.bind(this);
        this.handleRecipeDelete = this.handleRecipeDelete.bind(this);
        this.saveNewRecipe = this.saveNewRecipe.bind(this);
        this.handleSaveError = this.handleSaveError.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.dismissErrorModal = this.dismissErrorModal.bind(this);
    }

    componentWillMount() {
        var recipes = localStorage.getItem("_jayv30_recipes");
        console.log("recipes from localStorage: ", recipes);
        if (!recipes) recipes = JSON.stringify([ // some initial recipes to populate the ui
            { id:"644dc95d-cece-4bbd-aa46-704c67c58721",
                title:"Creamy Burrito Casserole",
                ingredients: ["1 lb ground beef or 1lb ground turkey", "1/2 medium yellow onion, chopped", "1 (1.25 ounce) package taco seasoning", "6 large flour tortillas", "1 (16 ounce) can refried beans", "2-3 cups shredded taco cheese or 2-3 cups cheddar cheese", "1 (10.75 ounce) can cream of mushroom soup", "4 ounces sour cream", "hot sauce, if desired"],
                directions: ["Brown ground meat/turkey & onion; drain", "Add taco seasoning and stir in refried beans", "Mix soup and sour cream in a separate bowl", "Spread 1/2 sour cream mixture in the bottom of a casserole dish", "Tear up 3 tortillas and spread over sour cream mixture", "Put 1/2 of the meat bean mixture over that", "Add a layer of cheese", "You could put some hot sauce on this now", "Repeat the layers", "Sprinkle cheese over the top and bake, uncovered, at 350°F for 20-30 minutes"]
            },
            { id:"549b7905-8709-4b76-a760-8f48f9e5475a",
                title:"Chocolate Moose",
                ingredients: ["1 moose", "40lbs hershey chocolate", "17 containers Cool Whip", "1 cherry"],
                directions: ["Send spouse to Alaska to capture moose, or have one delivered by UPS", "Meanwhile, melt chocolate in very large double boiler", "Keep warm", "Tie up moose with rope", "Holding the moose by the tail, carefully dip in melted chocolate, covering it completely with a thin coating", "Arrange moose attractively on large platter and refrigerate for 2 days to set chocolate", "Remove rope, wash to remove chocolate if necessary, and return rope to clothesline", "Garnish chocolate moose with Cool Whip and top with a cherry", "Serve immediately"]
            },
            { id:"238ba27b-7fc8-4c36-8e91-52f32ff85617",
                title:"Tap Water",
                ingredients: ["1 cup water", "1 teaspoon water"],
                directions: ["Place glass under tap.", "Turn tap on.", "Fill glass with water almost to the top.", "Turn tap off.", "Top up glass with additional teaspoons of water as needed until full.", "Use paper towel to mop up any spillage.", "Enjoy!"]
            }
        ]);
        this.setState({ recipes: JSON.parse(recipes) });
    }

    // after this component mounts, set menu state (expanded/collapsed) based on window width
    componentDidMount() {
        if (window.innerWidth < 768) {
            this.handleMenuShow();
        }

        this.displayRandomRecipe();
    }

    displayRandomRecipe() {
        var numRecipes = this.state.recipes.length;
        if (numRecipes > 0) {
            var randomIndex = (Math.floor(Math.random() * (numRecipes)) + 1 ) - 1;
            console.log("randomly displaying a recipe, index:", randomIndex);
            var recipeId = this.state.recipes[randomIndex].id;
            console.log("recipe " + this.state.recipes[randomIndex].title + " chosen!");
            var newUiState = { ...this.state.ui, displayedRecipeId: recipeId, editDisplayedRecipe: false };
            this.setState({ ui: newUiState });
        }
    }

    handleMenuShow() {
        var newUiState = { ...this.state.ui, menuOpen:true };
        this.setState({ ui: newUiState });
    }

    handleMenuHide() {
        var newUiState = { ...this.state.ui, menuOpen:false };
        this.setState({ ui: newUiState });
    }

    handleNewRecipeAddButton() {
        var newUiState = { ...this.state.ui, displayedRecipeId:null };
        this.setState({ ui: newUiState }, () => {this.handleMenuHide()});
    }

    handleRecipeSelect(recipe_id) {
        var newUiState = { ...this.state.ui, displayedRecipeId: recipe_id, editDisplayedRecipe: false };
        this.setState({ ui: newUiState }, () => {this.handleMenuHide()});
    }

    handleRecipeDelete(recipe_id) {
        var newRecipeArray = this.state.recipes.filter((ele) => {
            return ele.id !== recipe_id;
        });
        var numRecipes = newRecipeArray.length;
        var recipeId = null;
        if (numRecipes > 0) {
            var randomIndex = (Math.floor(Math.random() * (numRecipes)) + 1 ) - 1;
            recipeId = newRecipeArray[randomIndex].id;
        }
        var newUiObj = { ...this.state.ui, editDisplayedRecipe: false, displayedRecipeId: recipeId};
        this.setState({ recipes: newRecipeArray, ui: newUiObj }, () => {
            localStorage.setItem("_jayv30_recipes", JSON.stringify(this.state.recipes));
        });
    }

    saveNewRecipe(recipeObj) {
        var newRecipeArray = [ ...this.state.recipes ];
        var recipeIdxToUpdate = newRecipeArray.findIndex((ele) => { return ele.id === recipeObj.id});
        if (recipeIdxToUpdate !== -1) {
            newRecipeArray[recipeIdxToUpdate] = recipeObj;
        } else {
            newRecipeArray.unshift(recipeObj);
        }
        this.setState({ recipes: newRecipeArray }, () => {
            localStorage.setItem("_jayv30_recipes", JSON.stringify(this.state.recipes));
            this.handleRecipeSelect(recipeObj.id);
        });
    }

    handleSaveError(errors) {
        var newUiState = { ...this.state.ui, saveErrors: errors}
        this.setState({ ui: newUiState });
    }

    handleEditClick() {
        var newUiState = { ...this.state.ui, editDisplayedRecipe: true};
        this.setState({ ui: newUiState });
    }

    dismissErrorModal() {
        var newUiState = { ...this.state.ui, saveErrors: null };
        this.setState({ ui: newUiState });
    }

    render() {
        var recipeDisplay, recipe;
        if (this.state.ui.displayedRecipeId === null) {
            recipeDisplay = <NewRecipeForm displayRandomRecipe={this.displayRandomRecipe} onRecipeSave={this.saveNewRecipe} handleSaveError={this.handleSaveError} />
        } else if (this.state.ui.editDisplayedRecipe === true) {
            recipe = this.state.recipes.find((ele) => { return ele.id === this.state.ui.displayedRecipeId});
            recipeDisplay = <EditRecipeForm recipe={recipe} displayRandomRecipe={this.displayRandomRecipe} onRecipeSave={this.saveNewRecipe} handleSaveError={this.handleSaveError} />
        } else if (this.state.ui.editDisplayedRecipe === false) {
            recipe = this.state.recipes.find((ele) => { return ele.id === this.state.ui.displayedRecipeId});
            recipeDisplay = <Recipe recipe={recipe} handleEditClick={this.handleEditClick} onRecipeDelete={this.handleRecipeDelete} />
        }

        return (
            <div id="recipe-box-app">
                <RecipeMenu recipes={this.state.recipes} ui={this.state.ui} handleMenuHide={this.handleMenuHide} handleNewRecipeAddButton={this.handleNewRecipeAddButton} handleRecipeSelect={this.handleRecipeSelect} />
                <div id="menu-btn" onClick={this.handleMenuShow}><i className="fa fa-navicon fa-2x"></i></div>
                {recipeDisplay}
                <ErrorModal errors={this.state.ui.saveErrors} dismissErrorModal={this.dismissErrorModal} />
            </div>
        )
    }
}

class Recipe extends Component {
    constructor(props) {
        super(props);

        this.handleRecipeDelete = this.handleRecipeDelete.bind(this);
    }

    handleRecipeDelete() {
        this.props.onRecipeDelete(this.props.recipe.id)
    }

    render() {
        var recipe = this.props.recipe;

        return (
            <div id="recipe">
                <div id="recipe-card">
                    <div id="recipe-title">
                        <h2>{recipe.title}</h2>
                    </div>
                    <div id="recipe-ingredients" className="row">
                        <h3>Ingredients</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, idx) => {
                                return <li key={"ingredient-" + idx}>{ingredient}</li>
                            })}
                        </ul>
                    </div>
                    <div id="recipe-instructions" className="row">
                        <h3>Directions</h3>
                        {recipe.directions.map((direction, idx) => {
                            return <p key={"step-" + idx}>{direction}</p>
                        })}
                    </div>
                    <div className="row">
                        <div id="delete-btn" onClick={this.handleRecipeDelete}><i className="fa fa-trash fa-2x"></i></div>
                        <div id="edit-btn" onClick={this.props.handleEditClick}><i className="fa fa-edit fa-2x"></i></div>
                    </div>
                </div>
            </div>
        )
    }
}

class RecipeMenu extends Component {
    constructor(props) {
        super(props);

        // initial state
        this.state = {
            searchTerm: "",
            filteredResults: null
        }

        // bind component methods
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }

    handleSearchTermChange(evt) {
        var val = evt.target.value.toLowerCase();
        var filteredResults = [];
        this.props.recipes.forEach((recipe) => {
            if (recipe.title.toLowerCase().indexOf(val) !== -1) filteredResults.push(recipe);
        });

        this.setState({ searchTerm: val, filteredResults: filteredResults });
    }

    render() {
        var filteredRecipes;
        var classNames = require('classnames');
        var recipeMenuClasses = classNames({
            'active': this.props.ui.menuOpen
        });

        if (this.state.filteredResults) {
            filteredRecipes = <RecipeButtonList recipes={this.state.filteredResults} activeRecipe={this.props.ui.displayedRecipeId} handleRecipeSelect={this.props.handleRecipeSelect} />
        } else {
            filteredRecipes = <RecipeButtonList recipes={this.props.recipes} activeRecipe={this.props.ui.displayedRecipeId} handleRecipeSelect={this.props.handleRecipeSelect} />
        }

        return (
            <div id="recipe-menu" className={recipeMenuClasses}>
                <div id="menu-close" className="close-btn" onClick={this.props.handleMenuHide}>X</div>
                <h1>Your Recipes</h1>
                <div id="add-new" className="add-btn" onClick={this.props.handleNewRecipeAddButton}><i className="fa fa-plus"></i> Add New</div>
                <div id="search-box">
                    <p>Search:</p>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
                </div>
                {filteredRecipes}
            </div>
        )
    }
}

class EditRecipeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {}

        // bind component methods
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIngredientChange = this.handleIngredientChange.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.deleteIngredient = this.deleteIngredient.bind(this);
        this.addStep = this.addStep.bind(this);
        this.deleteStep = this.deleteStep.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
    }

    componentWillMount() {
        this.setState({ ...this.props.recipe });
    }

    handleTitleChange(evt) {
        var val = evt.target.value;
        this.setState({ title: val });
    }

    handleIngredientChange(idx, val) {
        const newIngredients = this.state.ingredients.map((ingredient, nidx) => {
            if (idx !== nidx) return ingredient;
            return val;
        });
        this.setState({ ingredients: newIngredients });
    }

    addIngredient() {
        var newState = [ ...this.state.ingredients ];
        newState.push("");
        this.setState({ ingredients: newState });
    }

    deleteIngredient(idx) {
        var newState = [ ...this.state.ingredients ];
        newState.splice(idx, 1);
        this.setState({ ingredients: newState });
    }

    handleStepChange(idx, val) {
        const newSteps = this.state.directions.map((step, sidx) => {
            if (idx !== sidx) return step;
            return val;
        });
        this.setState({ directions: newSteps });
    }

    addStep() {
        var newState = [ ...this.state.directions ];
        newState.push("");
        this.setState({ directions: newState });
    }

    deleteStep(idx) {
        var newState = [ ...this.state.directions ];
        newState.splice(idx, 1);
        this.setState({ directions: newState });
    }

    saveRecipe() {
        // remove all 0 length ingredient input fields
        var newIngredientArray = this.state.ingredients.filter((ingredient) => {
            return ingredient.length > 0;
        });
        // remove all 0 length directions textarea fields
        var newDirectionsArray = this.state.directions.filter((direction) => {
            return direction.length > 0;
        });
        var errors = [];
        if (this.state.title.length < 1) errors.push("Must provide a title");
        if (newIngredientArray.length < 1) errors.push("Must provide at least 1 ingredient");
        if (newDirectionsArray.length < 1) errors.push("Must provide at least one step/direction");

        if (errors.length > 0) {
            this.props.handleSaveError(errors);
        } else {
            this.setState({ ...this.state, ingredients: newIngredientArray, directions: newDirectionsArray }, () => {
                this.props.onRecipeSave({ ...this.state });
            });
        }
    }

    render() {
        return (
            <div id="recipe" className="add-new">
                <div id="recipe-card">
                    <h2>Edit Recipe</h2>
                    <div id="recipe-title">
                        <h2><input type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} /></h2>
                    </div>
                    <div id="recipe-ingredients" className="row">
                        <h3>Ingredients</h3>
                        <ul>
                            {this.state.ingredients.map((ingredient, idx) => {
                                return <IngredientListItem key={"ingredient-" + idx} item={ingredient} index={idx} onItemChange={this.handleIngredientChange} onEnterKeyPress={this.addIngredient} onItemDelete={this.deleteIngredient} />
                            })}
                        </ul>
                        <div className="add-btn" onClick={this.addIngredient}><i className="fa fa-plus"></i> Add Ingredient</div>
                    </div>
                    <div id="recipe-instructions" className="row">
                        <h3>Directions</h3>
                        {this.state.directions.map((step, idx) => {
                            return <DirectionListItem key={"step-" + idx} item={step} index={idx} onItemChange={this.handleStepChange} onItemDelete={this.deleteStep} />
                        })}
                        <div className="add-btn" onClick={this.addStep}><i className="fa fa-plus"></i> Add Step</div>
                    </div>
                    <div className="row">
                        <div id="cancel-btn" onClick={this.props.displayRandomRecipe}><i className="fa fa-ban fa-2x"></i></div>
                        <div id="save-btn" onClick={this.saveRecipe}><i className="fa fa-save fa-2x"></i></div>
                    </div>
                </div>
            </div>
        )
    }

}

class NewRecipeForm extends Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            id: "",
            title: "",
            ingredients: [""],
            directions: [""]
        }

        // bind component methods
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIngredientChange = this.handleIngredientChange.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.deleteIngredient = this.deleteIngredient.bind(this);
        this.addStep = this.addStep.bind(this);
        this.deleteStep = this.deleteStep.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
    }

    handleTitleChange(evt) {
        var val = evt.target.value;
        this.setState({ title: val });
    }

    handleIngredientChange(idx, val) {
        const newIngredients = this.state.ingredients.map((ingredient, nidx) => {
            if (idx !== nidx) return ingredient;
            return val;
        });
        this.setState({ ingredients: newIngredients });
    }

    addIngredient() {
        var newState = [ ...this.state.ingredients ];
        newState.push("");
        this.setState({ ingredients: newState });
    }

    deleteIngredient(idx) {
        var newState = [ ...this.state.ingredients ];
        newState.splice(idx, 1);
        this.setState({ ingredients: newState });
    }

    handleStepChange(idx, val) {
        const newSteps = this.state.directions.map((step, sidx) => {
            if (idx !== sidx) return step;
            return val;
        });
        this.setState({ directions: newSteps });
    }

    addStep() {
        var newState = [ ...this.state.directions ];
        newState.push("");
        this.setState({ directions: newState });
    }

    deleteStep(idx) {
        var newState = [ ...this.state.directions ];
        newState.splice(idx, 1);
        this.setState({ directions: newState });
    }

    saveRecipe() {
        // remove all 0 length ingredient input fields
        var newIngredientArray = this.state.ingredients.filter((ingredient) => {
            return ingredient.length > 0;
        });
        // remove all 0 length directions textarea fields
        var newDirectionsArray = this.state.directions.filter((direction) => {
            return direction.length > 0;
        });
        var errors = [];
        if (this.state.title.length < 1) errors.push("Must provide a title");
        if (newIngredientArray.length < 1) errors.push("Must provide at least 1 ingredient");
        if (newDirectionsArray.length < 1) errors.push("Must provide at least one step/direction");

        if (errors.length > 0) {
            this.props.handleSaveError(errors);
        } else {
            var uuid = require('uuid');
            var id = uuid.v4();
            this.setState({ ...this.state, id: id, ingredients: newIngredientArray, directions: newDirectionsArray }, () => {
                this.props.onRecipeSave({ ...this.state });
            });
        }
    }

    render() {
        return (
            <div id="recipe" className="add-new">
                <div id="recipe-card">
                    <h2>Add New Recipe</h2>
                    <div id="recipe-title">
                        <h2><input type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} /></h2>
                    </div>
                    <div id="recipe-ingredients" className="row">
                        <h3>Ingredients</h3>
                        <ul>
                            {this.state.ingredients.map((ingredient, idx) => {
                                return <IngredientListItem key={"ingredient-" + idx} item={ingredient} index={idx} onItemChange={this.handleIngredientChange} onItemDelete={this.deleteIngredient} />
                            })}
                        </ul>
                        <div className="add-btn" onClick={this.addIngredient}><i className="fa fa-plus"></i> Add Ingredient</div>
                    </div>
                    <div id="recipe-instructions" className="row">
                        <h3>Directions</h3>
                        {this.state.directions.map((step, idx) => {
                            return <DirectionListItem key={"step-" + idx} item={step} index={idx} onItemChange={this.handleStepChange} onItemDelete={this.deleteStep} />
                        })}
                        <div className="add-btn" onClick={this.addStep}><i className="fa fa-plus"></i> Add Step</div>
                    </div>
                    <div className="row">
                        <div id="cancel-btn" onClick={this.props.displayRandomRecipe}><i className="fa fa-ban fa-2x"></i></div>
                        <div id="save-btn" onClick={this.saveRecipe}><i className="fa fa-save fa-2x"></i></div>
                    </div>
                </div>
            </div>
        )
    }
}

class IngredientListItem extends Component {
    constructor(props) {
        super(props);

        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    handleItemChange(evt) {
        var text = evt.target.value;
        this.props.onItemChange(this.props.index, text);
    }

    handleItemDelete() {
        this.props.onItemDelete(this.props.index);
    }

    render() {
        return (
            <li>
                <input type="text" placeholder={"Ingredient " + (this.props.index + 1)} value={this.props.item} name={this.props.index} onChange={this.handleItemChange} />
                <div className="delete-btn" onClick={this.handleItemDelete}>X</div>
            </li>
        )
    }
}

class DirectionListItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    handleItemChange(evt) {
        var text = evt.target.value;
        this.props.onItemChange(this.props.index, text);
    }

    handleItemDelete() {
        this.props.onItemDelete(this.props.index);
    }

    render() {
        return (
            <div className="step-wrapper">
                <textarea placeholder={"Step " + (this.props.index + 1)} name={this.props.index} value={this.props.item} onChange={this.handleItemChange} rows="3"></textarea>
                <div className="delete-btn" onClick={this.handleItemDelete}>X</div>
            </div>
        )
    }
}

class RecipeButtonList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="recipe-list">
                {this.props.recipes.map((recipe, idx) => {
                    return <RecipeButtonItem index={idx} key={"recipe-" + idx} activeRecipe={this.props.activeRecipe} recipe={recipe} handleSelect={this.props.handleRecipeSelect} />
                })}
            </div>
        )
    }
}

class RecipeButtonItem extends Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect() {
        this.props.handleSelect(this.props.recipe.id);
    }

    render() {
        var classNames = require('classnames');

        var recipeBtnItemClasses = classNames({
            'recipe-btn': true,
            'selected': this.props.recipe.id === this.props.activeRecipe
        });

        return (
            <div className={recipeBtnItemClasses} id={"recipe-" + this.props.recipe.id} onClick={this.handleSelect}>{this.props.recipe.title}</div>
        )
    }
}

class ErrorModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.errors === null || this.props.errors.length < 1) return null;

        return (
            <div className="modal-wrapper">
                <div id="modal">
                    <h2>Please fix the following errors:</h2>
                    <ul className="modal-error-list">
                        {this.props.errors.map((error, idx) => {
                            return <li key={"error-" + idx}>{error}</li>
                        })}
                    </ul>
                    <button onClick={this.props.dismissErrorModal}>OK</button>
                </div>
            </div>
        )
    }
}


export default ManageMenuApp;