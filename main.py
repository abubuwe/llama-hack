from fastapi import FastAPI, Query
from get_recipe_and_shopping_list import main as get_recipe_and_shopping_list

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/recipe-and-shopping-list/")
async def recipe_and_shopping_list(num_days: int = Query(7, ge=1)):
    """
    Endpoint to call the get_recipe_and_shopping_list function.
    :param num_days: Number of days for which to generate recipes and shopping lists. Default is 7.
    :return: JSON response with the result or a status message.
    """
    try:
        # Call the main function with the specified number of days
        result = get_recipe_and_shopping_list(num_days=num_days)
        return {"status": "success", "data": result}
    except Exception as e:
        return {"status": "error", "message": str(e)}
