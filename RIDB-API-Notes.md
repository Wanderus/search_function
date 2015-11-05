# RIDB-API Notes

## Description - Prepared by Drew

- Recreational spaces identified in this data set are either a "RecArea" or a "Facility" and there are unique IDs that help link RecArea's within Facilities and vice versa.
- These RecAreas and Facilities have lots of additional information that I broke down into several different bucks:
    * Basic info (Name, Managing Organization, Address, Website, phone #, social media pages),
    * Attributes (handicap accessible, type of rec area or facility space, % canopy cover, dog friendly, etc.),
    * Activities (type of activities a rec area or facility supports),
    * Events (start data, end date, description),
    * Media (pictures, videos, embed codes, url to useable media). 
- There are some additional fields that look useful like rec area/facility/event Description. That likely includes good information for us, but we may have to manipulate it individually.
- Lat and Long are required , helpful for a tag on a map especially in a rural area, but not necessarily for our purposes. TBD on how to use that data. We will use addresses which should be entrance points, which will be useful for our users.
- There is also info on tours, campsites, and permitted equipment around campsites, but for right now, I don't see us include this information yet.

Other info that we want on our website but is not part of RIDB:
- Hours of operation (maybe included in the Description, but not sure)
- Neighborhood where the park/facility is in
- Accessibility info like closest metro stops, closest bus stops, closest bike docks, etc.
- Polygon coordinates
