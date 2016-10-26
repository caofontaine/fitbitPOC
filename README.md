# FitBit POC

A proof of concept to show data exported from FitBit website and displayed in the API.

I pulled data from my FitBit from September 2016 as a CSV and imported it to MongoDB as follows:
mongoimport --db fitbitPOC --collection fitbit0916 --type csv --file (File location of CSV) --headerline
