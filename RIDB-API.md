# RESTful API (Application Programming Interface): 

API stands for Application Programming Interface. It serves as a connection between two pieces of software. 

REST stands for Represenational State Transfer.

In general, it is a style of software of the WWW. Makes a call from client to a server and then gets data back via the HTTP Protocol. 

## RIDB API

### API Endpoints

The following is the structure of the API request:

https://ridb.recreation.gov/api/v1/{endpoint} 

Our API Key: 1D852276B76740FE8BCB99059BFD7AE0

RIDB allows you to download the entire data set in CSV or JSON Format. 

Here is a tool that allows you to quickly validate HTTP requests:

<https://www.hurl.it/>

### Types of Data That Can be Obtained: 

1. RIDB Organizations: Federal Agencies that Provide RIDB Data 

Sample Query: <https://ridb.recreation.gov/api/v1/organizations/?apikey=1D852276B76740FE8BCB99059BFD7AE0>

2. Recreation Areas Specific to an Organization 

Sample Query: <https://ridb.recreation.gov/api/v1/organizations/128/recareas?apikey=1D852276B76740FE8BCB99059BFD7AE0>

3. Recreation Areas

Sample Query: <https://ridb.recreation.gov/api/v1/organizations/128/recareas?apikey=1D852276B76740FE8BCB99059BFD7AE0>

4. Facilities 

Sample Query: <https://ridb.recreation.gov/api/v1/facilities/232040.json?full=true&apikey=1D852276B76740FE8BCB99059BFD7AE0>

5. Campsites
6. Permit Entrances
7. Tours
8. Activities 
9. Events 

....

so on. 

We need to decide what data we want to use and store. 


