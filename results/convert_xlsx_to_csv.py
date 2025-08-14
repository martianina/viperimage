import pandas as pd
import os
import glob

def convert_xlsx_to_csv():
    """Convert all XLSX files in the current directory to CSV format."""
    
    # Find all XLSX files
    xlsx_files = glob.glob("*.xlsx")
    
    print(f"Found {len(xlsx_files)} XLSX files to convert:")
    
    for xlsx_file in xlsx_files:
        try:
            # Read the XLSX file
            df = pd.read_excel(xlsx_file)
            
            # Create CSV filename
            csv_file = xlsx_file.replace('.xlsx', '.csv')
            
            # Save as CSV
            df.to_csv(csv_file, index=False)
            
            print(f"✓ Converted {xlsx_file} -> {csv_file} ({len(df)} rows)")
            
        except Exception as e:
            print(f"✗ Error converting {xlsx_file}: {str(e)}")
    
    print("\nConversion complete!")

if __name__ == "__main__":
    convert_xlsx_to_csv() 