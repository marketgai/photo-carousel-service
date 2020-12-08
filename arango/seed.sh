arangoimport --file "/Users/marcuslee/Desktop/HR/SDC/service/db/csv/graph/graphContainsEdge.csv" --type csv --collection "contains" --server.database "testing";

arangoimport --file "/Users/marcuslee/Desktop/HR/SDC/service/db/csv/graph/graphFavList.csv" --type csv --collection "favList" --server.database "testing";

arangoimport --file "/Users/marcuslee/Desktop/HR/SDC/service/db/csv/graph/graphListing.csv" --type csv --collection "listings" --server.database "testing";

arangoimport --file "/Users/marcuslee/Desktop/HR/SDC/service/db/csv/graph/graphOwnsEdge.csv" --type csv --collection "owns" --server.database "testing";

arangoimport --file "/Users/marcuslee/Desktop/HR/SDC/service/db/csv/graph/graphUser.csv" --type csv --collection "user" --server.database "testing";


# run with bash pathname