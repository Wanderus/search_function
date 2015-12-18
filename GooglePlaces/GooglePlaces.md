# Google Places API

There are 4 types of searches that we can do:

## Nearby search

Returns a list of nearby places. 

Always needs to include a locations and can be specified in one of two ways:

- LatLngBounds (define the searcharea)
- Circular area defined as a combination of the location property (radius)

Let's walkthrough an example. 

## Text search

Information about a set of places based on a string. 

Example: Parks in Washignton DC

## Radar search

Allows you to search for places within a specified search radius by keyword, type, or name.

Example: 

## Place Details

We can also get detailed information about a specific place.

We search for the place, get the place ID and use it to request additional details about that place. 

Place ID

- First, look up the ID, and that is available in PlaceResult of a Place Search or Details request. 
- We can then later use the place ID to look up place details.   

