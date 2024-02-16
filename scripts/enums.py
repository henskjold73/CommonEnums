import os
import re

# Regular expression pattern for matching enum declarations
ENUM_PATTERN = re.compile(r"\bexport\s+enum\s+(\w+)\b")

# Function to find enums in a file
def find_enums_in_file(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        content = file.read()
        enums = ENUM_PATTERN.findall(content)
        return enums

# Main function
def main():
    # Path to your TypeScript project directory
    root_directory = './src'  
    enum_by_file = {}

    for root, dirs, files in os.walk(root_directory):
        for file in files:
            if file.endswith(".ts"):
                filename = os.path.join(root, file)
                enums = find_enums_in_file(filename)
                if enums:
                    base_filename = os.path.splitext(os.path.basename(filename))[0]
                    if base_filename not in enum_by_file:
                        enum_by_file[base_filename] = []
                    enum_by_file[base_filename].extend(enums)

    # Print enums grouped by filename
    for filename, enums in enum_by_file.items():
        print(f"### {filename}")
        for enum in enums:
            print(f"- {enum}")
        print()

# Start the script
if __name__ == "__main__":
    main()
