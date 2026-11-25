// Run in the Earth Engine Code Editor after registering a Cloud project
// for Earth Engine access. The two exports appear in the Tasks panel.

var eventArea = ee.Geometry.Rectangle(
  [92.15065, 24.84714, 94.16335, 28.28476],
  null,
  false
);

Map.centerObject(eventArea, 8);

// NASA Black Marble VNP46A2 for the event date (daily, 500 m).
var viirsCollection = ee.ImageCollection('NASA/VIIRS/002/VNP46A2')
  .filterDate('2016-08-12', '2016-08-13')
  .filterBounds(eventArea);

print('Matching VIIRS images for 2016-08-12', viirsCollection.size());

var viirs = ee.Image(viirsCollection.first())
  .select([
    'DNB_BRDF_Corrected_NTL',
    'Gap_Filled_DNB_BRDF_Corrected_NTL',
    'Mandatory_Quality_Flag',
    'QF_Cloud_Mask'
  ])
  .clip(eventArea);

Export.image.toDrive({
  image: viirs,
  description: 'VNP46A2_20160812_India_flood_event',
  folder: 'india_2016_event',
  region: eventArea,
  scale: 500,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});

// GHSL resident population for 2015 (100 m).
var ghsl = ee.Image('JRC/GHSL/P2023A/GHS_POP/2015')
  .select('population_count')
  .clip(eventArea);

Export.image.toDrive({
  image: ghsl,
  description: 'GHS_POP_2015_India_flood_event',
  folder: 'india_2016_event',
  region: eventArea,
  scale: 100,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});
