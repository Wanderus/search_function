# Open Trails

Credits to Drew for finding this data source on trails. 

<http://www.codeforamerica.org/specifications/trails/spec.html >

They got an extensive documentation:

<https://docs.google.com/document/d/1KF8KAio-SqGHhh9oFY_KjfwIi3PePOHg7KfTSPh27fc/edit>

There is a discussion of data models for their data:

## stewards.csv

- Organizations that put the trails together. 
- Not really interesting. 

trail_segments.geojson

- Contains polylines that make up the trails. 

## named_trails.csv

- Defined by park agencies. 
- Array of trail segments. 
- Interesting point: Each segment of the trail can have different names.- The named trails are acutally constructed with an array of trail segments. 

It also includes a narrative description for each named trail. 

## trailheads.geojson

- Contains point geometry and other metadata associated with the trailhead.
- trailhead can serve as points of access for multiple trail segments, which in turn can belong to one or more named_trail. 
- Requires a segments_id field. 
- Other available fields:
	- parking
	- drinkwater
	- restrooms 

## areas.geojson

- Contains polygons that represent parks and other types of protected lands.
- Unclear on how to get the coordinates for the polygons. 





