export class RecipeActionComponent {

	isNew:boolean = true;
    isEdit:boolean = false;
    isSave:boolean = true;

    addDescription(directions:any) {
       console.log("clicked add description");
       directions.push({});
    }

    addIngredients(ingredients:any) {
       ingredients.push({}); 
    }

    edit() {
      this.isEdit = false;
      this.isSave = true;
    }

    save() {
      this.isSave = false;
      this.isEdit = true;
    }
}