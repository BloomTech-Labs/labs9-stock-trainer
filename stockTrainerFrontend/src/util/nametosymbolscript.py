import csv
import json

# super simple + janky script to take a csv file from NASDAQ and take the symbol/name

# probably should read from the command line
csvfile = open('companylist.csv', 'r')
csvfile2 = open('nysecompanylist.csv', 'r')
jsonfile = open('test.json', 'w')

fieldnames = ("Symbol", "Name")
reader = csv.DictReader(csvfile, fieldnames)
reader2 = csv.DictReader(csvfile2, fieldnames)
json_list = []
for i, row in enumerate(reader):
    if i == 0:
      continue
    test = {}
    test['name'] = row['Name']
    test['symbol'] = row['Symbol']
    json_list.append(test)
for i, row in enumerate(reader2):
    if i == 0:
      continue
    test = {}
    test['name'] = row['Name']
    test['symbol'] = row['Symbol']
    if test not in json_list:
        json_list.append(test)

sorted_json_list = sorted(json_list, key=lambda x: x['name'])

jsonfile.write(json.dumps(sorted_json_list))