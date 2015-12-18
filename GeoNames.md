# GeoNanmes

Geonames is a opensource geographical database that covers countries and contains over 8 million placenames available for download free of charge. 

<http://www.geonames.org/>

It isn't perfect for what we are doing but it will give us a starting point. 

One thing that's really powerful with GeoNames is that it allows us to query the globe with place names. 
Here is the documentation to the Full Text Search WebService:

<http://www.geonames.org/export/geonames-search.html>

Let's look at some examples at the power we have at our finger tips:

<http://api.geonames.org/searchJSON?q=dc&maxRows=10&username=rhsu0268>

<http://api.geonames.org/searchJSON?q=Rock+Creek&maxRows=10&username=rhsu0268>

Minor Aside
Search terms that we place into the query need to be url_encoded. Here's a tool:

<http://www.w3schools.com/tags/ref_urlencode.asp>

Let's look at another example:

<http://api.geonames.org/searchJSON?q=Kissena+Park&maxRows=10&username=rhsu0268>

Another thing that's nice is we can do a search by country:

<http://api.geonames.org/searchJSON?q=parks&country=US&username=rhsu0268>

We can also do a search by tags:

<http://api.geonames.org/searchJSON?tag=skiresort&username=rhsu0268>

<http://api.geonames.org/searchJSON?tag=skiresort&country=US&username=rhsu0268>

These tags are actually added by contributors and so very limited unfortunately. 

## Postal Code Search 

We can do queries that involve zipcodes:

<http://api.geonames.org/postalCodeSearchJSON?postalcode=20037&maxRows=10&username=rhsu0268>

Let's look at how we can look up places with postalcode:

<http://api.geonames.org/postalCodeLookupJSON?postalcode=20037&country=US&username=rhsu0268>

<http://api.geonames.org/postalCodeLookupJSON?placename=park&username=rhsu0268>

We can search for a zipcode and a placename:

<http://api.geonames.org/postalCodeLookupJSON?placename=park&postalcode=21146&username=rhsu0268>


We can also do reverse geocoding (Turning coordinates to address)

- Very useful if we wanted to get locations close to the user.

Here's an example:

<http://api.geonames.org/findNearbyPostalCodesJSON?postalcode=20037&country=US&radius=10&username=rhsu0268>

<http://api.geonames.org/findNearbyPostalCodesJSON?lat=38.9007&lng=-77.050448&country=US&radius=10&username=rhsu0268>

We can also look for toponyms:

<http://api.geonames.org/findNearbyJSON?lat=38.9007&lng=-77.050448&username=demo>

Here's the link to other reverse geocoding features:

<http://www.geonames.org/export/reverse-geocoding.html>


There are also Place Hierarchy WebServices, JSON Webservice for earthquakes and weather...
