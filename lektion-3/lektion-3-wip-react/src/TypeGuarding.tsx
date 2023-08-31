
const getIdFromAnotherComponent = (id: string | number): number => {
    if(typeof id === "string"){
        return parseInt(id)
    }

    return id
}

const mockRequest = (id: number) => {
    //Mocking request
    console.log("Request sent with id", id)
}

const TypeGuarding = () => {
    mockRequest(getIdFromAnotherComponent("12"))
    mockRequest(getIdFromAnotherComponent(24))
    return <div></div>
}

enum ProductCategory {
    Food,
    Electronics,
}

interface GenericProduct {
    category: ProductCategory
}

interface FoodProduct extends GenericProduct {
    foodType: string;
    category: ProductCategory.Food
}

interface ElectronicProduct extends GenericProduct {
    voltage: string
    category: ProductCategory.Electronics

}

class NonProduct {

}

function printProductDetails(product: GenericProduct): void {
    if (product.category === ProductCategory.Food) {
        //Will not work as is type
      if (product instanceof FoodProduct) {
        console.log("Food Type:", product.foodType);
      } else {
        console.log("Invalid product type for FoodProduct");
      }
    } else if (product.category === ProductCategory.Electronics) {
        //Will not work as is type
      if (product instanceof ElectronicProduct) {
        console.log("Voltage:", product.voltage);
      } else {
        console.log("Invalid product type for ElectronicProduct");
      }
      //Will work as it is a class instance
    } else if(product instanceof NonProduct){
      console.log("Invalid product category");
    }
  }

export default TypeGuarding