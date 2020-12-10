arangoimport --file "/Users/marcuslee/Desktop/HR/SDC/service/db/csv/graph/graphContainsEdge.csv" --type csv --collection "contains" --server.database "testing";

arangoimport --file "/Users/marcuslee/Desktop/HR/SDC/service/db/csv/graph/graphFavList.csv" --type csv --collection "favList" --server.database "testing";

arangoimport --file "/Users/marcuslee/Desktop/HR/SDC/service/db/csv/graph/graphListing.csv" --type csv --collection "listings" --server.database "testing";

arangoimport --file "/Users/marcuslee/Desktop/HR/SDC/service/db/csv/graph/graphOwnsEdge.csv" --type csv --collection "owns" --server.database "testing";

arangoimport --file "/Users/marcuslee/Desktop/HR/SDC/service/db/csv/graph/graphUser.csv" --type csv --collection "user" --server.database "testing";


# run with bash pathname


#this one is for new database using JSON for listings


arangoimport --file "/Users/marcuslee/Desktop/HR/SDC/service/db/arango/csv/jsonListing.json" --type json --collection "listings" --create-collection true --batch-size 33554432 --progress true --threads 4 --server.database "stayio";