# RIDB Search Terms 

1.  Store each RecArea (3390 data points)
    Each RecArea Has:
        * RecAreaMapURL
        * RecAreaReservationURL
        * RecAreaFeeDescription
        * RecAreaName
        * RecAreaDescription
        * Keywords
        * RecAreaEmail
        * RecAreaLatitude
        * StayLimit
        * GEOJSON:
        * LastUpdateDate
        * RecAreaID
        * RecAreaLongitude
        * RecAreaDirections
        * RecAreaPhone
        * OrgRecAreaID


<https://ridb.recreation.gov/api/v1/recareas.json?apikey=1D852276B76740FE8BCB99059BFD7AE0>

2.  We can retrieve each recArea with the recAreaID.

3.  Within each recarea, there are facilities (Can't really see any)

<https://ridb.recreation.gov/api/v1/recareas/facilities.json?apikey=1D852276B76740FE8BCB99059BFD7AE0>

4.  Within each recarea, there are addresses (country, state)

<https://ridb.recreation.gov/api/v1/recareaaddresses.json?apikey=1D852276B76740FE8BCB99059BFD7AE0>

5.  Within each recarea, we can grab its media (images)

<https://ridb.recreation.gov/api/v1/recareas/1708/media.json?apikey=1D852276B76740FE8BCB99059BFD7AE0>

6.  Within each recarea, there are links

<https://ridb.recreation.gov/api/v1/recareas/1708/links.json?apikey=1D852276B76740FE8BCB99059BFD7AE0>
