import pandas as pd

def process_tesco_products(csv_path: str) -> pd.DataFrame:
    """
    Process Tesco products CSV:
    - Drop products without prices
    - Remove products with price increases
    - Use existing discount calculations
    - Sort by percentage discount
    - Add unique ID
    """
    # Read CSV with correct column names
    df = pd.read_csv(csv_path)
    
    # Convert price columns to float
    df['price'] = pd.to_numeric(df['price'], errors='coerce')
    df['clubcard_price'] = pd.to_numeric(df['clubcard_price'], errors='coerce')
    
    # Drop rows with missing prices
    df_clean = df.dropna(subset=['price'])
    
    # Keep only products with discounts
    df_clean = df_clean[df_clean['discount'] > 0]
    
    # Sort by percent discount
    df_sorted = df_clean.sort_values('percent_discount', ascending=False)
    
    # Add unique ID starting from 1
    df_sorted['id'] = range(1, len(df_sorted) + 1)
    
    # Select and rename columns for output
    df_output = df_sorted[[
        'id',
        'product_name', 
        'quantity', 
        'quantity_unit',
        'price',
        'clubcard_price',
        'cleaned_category',
        'discount',
        'percent_discount',
        'simple_name'
    ]]
    
    # Convert simple_name to lowercase
    df_output['simple_name'] = df_output['simple_name'].str.lower()
    
    # Save to CSV
    try:
        output_file = 'tesco_products_final.csv'
        df_output.to_csv(output_file, index=False)
        print(f"Saved discounted products to {output_file}")
    except Exception as e:
        print(f"Error saving file: {e}")
    
    return df_output

if __name__ == "__main__":
    df = process_tesco_products('tesco_fresh_foods_with_simple_names.csv')
    print("\nTop discounted products:")
    print(df[['product_name', 'price', 'clubcard_price', 'percent_discount']].head())