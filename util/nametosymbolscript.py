import csv
import json

# super simple + janky script to take a csv file from NASDAQ and take the symbol/name

# probably should read from the command line
csvfile = open('companylist.csv', 'r')
# probably need to implement a way to read multiple files and write once
jsonfile = open('test.json', 'w')

fieldnames = ("Symbol", "Name")
reader = csv.DictReader(csvfile, fieldnames)
json_list = []
for row in reader:
    test = {}
    test['Symbol'] = row['Symbol']
    test['Name'] = row['Name']
    json_list.append(test)

jsonfile.write(json.dumps(json_list))