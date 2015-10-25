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

1. Recreation

Sample Query: <https://ridb.recreation.gov/api/v1/recareas.json?apikey=1D852276B76740FE8BCB99059BFD7AE0>
  Note: RecAreaLatitude, GeoJSON, RecAreaLongitude, RecAreaDescription
  Note: RecAreaID (Can be plugged into other queries) EX: 10 (White Moutains National Recreation Area)


2. Recreation Area Activities

Sample Query: <https://ridb.recreation.gov/api/v1/recareas/10/activities.json?apikey=1D852276B76740FE8BCB99059BFD7AE0>
  Note: ActivityName (Auto Touring, Boating, Climbing)

3. Campsites

Sample Query: <https://ridb.recreation.gov/api/v1/campsites.json?apikey=1D852276B76740FE8BCB99059BFD7AE0>
  Note: CampsiteName (Number value but we can figure out what those are)

4. Tours

Sample Query: <https://ridb.recreation.gov/api/v1/tours.json?apikey=1D852276B76740FE8BCB99059BFD7AE0>
  Note: TourTypes, TourDuration

5. Activites

Sample Query: <https://ridb.recreation.gov/api/v1/activities.json?apikey=1D852276B76740FE8BCB99059BFD7AE0>
  Note: Different Types of Activities (Climbing, Boating)
