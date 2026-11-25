# India flood event: acquisition notes

## Event and sensor coverage

Selected event: Sen1Floods11 India event dated **12 August 2016**, descending Sentinel-1 pass, relative orbit 77. Event bounds in the metadata are approximately 92.15065–94.16335° E, 24.84714–28.28476° N.

**Radar coverage is confirmed in the ASF catalogue.** Three adjacent Sentinel-1A GRD-HD products from the same pass intersect the event bounds. A single scene is available for a representative portion; download all three for the full metadata bounding box:

- [Central product, frame 506](https://datapool.asf.alaska.edu/GRD_HD/SA/S1A_IW_GRDH_1SDV_20160812T234651_20160812T234716_012574_013B43_8C18.zip) — 1.09 GB.
- [Southern product, frame 511](https://datapool.asf.alaska.edu/GRD_HD/SA/S1A_IW_GRDH_1SDV_20160812T234716_20160812T234741_012574_013B43_E465.zip) — 1.08 GB.
- [Northern product, frame 500](https://datapool.asf.alaska.edu/GRD_HD/SA/S1A_IW_GRDH_1SDV_20160812T234622_20160812T234651_012574_013B43_CFE9.zip) — 1.22 GB.

ASF scene search is public, but scene downloads require Earthdata Login; see [ASF API/download documentation](https://docs.asf.alaska.edu/api/basics/).

**Night-light coverage is confirmed in the LAADS archive.** The exact daily VIIRS Black Marble tile for the event date and location is [VNP46A2.A2016225.h27v06.002.2024282072040.h5](https://ladsweb.modaps.eosdis.nasa.gov/archive/allData/5200/VNP46A2/2016/225/VNP46A2.A2016225.h27v06.002.2024282072040.h5). VNP46A2 is a daily corrected nighttime-light product; see [NASA Black Marble product information](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/science-domain/nighttime-lights). Download redirects to Earthdata Login. Archive coverage does not establish that every pixel has usable radiance; inspect the product QA layers after retrieval.

## Files already saved

- **Sen1Floods11:** official v1.1 India hand-labeled subset: 68 India chips each for `S1Hand`, `LabelHand`, and `S2Hand`, plus `Sen1Floods11_Metadata.geojson`. These are the India hand-labeled subset, not a full mirror of every dataset split. [Official project repository](https://github.com/cloudtostreet/Sen1Floods11).
- **WorldCover:** four 2020 v100 10 m GeoTIFF tiles covering the event bounds, in `worldcover_2020_v100/`. The 2020 release is the nearest available WorldCover epoch preceding the 2016 event. [Official data access page](https://esa-worldcover.org/en/data-access).
- **OSM:** `north-eastern-zone-latest.osm.pbf`, the current Geofabrik Northeast India regional extract. It is not a 2016 historical snapshot. [Geofabrik India downloads](https://download.geofabrik.de/asia/india/index.html).
- **TLE:** `SENTINEL-1A_current.tle`, obtained from [CelesTrak](https://celestrak.org/NORAD/elements/gp.php?CATNR=39634&FORMAT=tle). Its epoch is 24 November 2026, so it is a current orbit element and cannot reconstruct the satellite orbit at the 2016 event date.

## Still to retrieve

- **Sentinel-1 SAFE/GRD scene file(s):** use one ASF link above after signing in with Earthdata. For full bounding-box coverage, retrieve all three adjacent products.
- **Event-day VIIRS raster:** download the exact LAADS file above after signing in with Earthdata.
- **GHSL:** the official JRC archive lists the intersecting tile `GHS_POP_E2015_GLOBE_R2023A_4326_3ss_V1_0_R9_C28.zip` (about 19 MB), [direct tile link](https://jeodpp.jrc.ec.europa.eu/ftp/jrc-opendata/GHSL/GHS_POP_GLOBE_R2023A/GHS_POP_E2015_GLOBE_R2023A_4326_3ss/V1-0/tiles/GHS_POP_E2015_GLOBE_R2023A_4326_3ss_V1_0_R9_C28.zip). The JRC host timed out from the available download route, so this tile is catalogued but not saved here. The epoch 2015 is the nearest pre-event GHS-POP population surface. [Official GHSL product page](https://human-settlement.emergency.copernicus.eu/ghs_pop2023.php).

## Alternative download route: Google Earth Engine

Earth Engine hosts the same daily NASA VIIRS product and the JRC GHSL population collection. The VIIRS catalog includes the 2016 event date, and the GHSL collection includes a 2015 image. This route bypasses the LAADS and JRC file-download hosts, but requires an Earth Engine-registered Google Cloud project. [VIIRS catalog](https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP46A2), [GHSL catalog](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_POP), [Earth Engine access setup](https://developers.google.com/earth-engine/guides/access).

Open `earth_engine_export_viirs_ghsl.js` in the [Earth Engine Code Editor](https://code.earthengine.google.com/), run it, then start both export tasks in the Tasks panel. The resulting GeoTIFFs go to the `india_2016_event` folder in Google Drive. See [Earth Engine image export instructions](https://developers.google.com/earth-engine/guides/exporting_images).

## Coverage scope

The dual-sensor confirmation is at the catalogue/archive and tile-footprint level: a matching Sentinel-1 pass intersects the event bounds and the event-day VIIRS tile exists for the area. We have not inspected pixel-level VIIRS QA or radiance, and the two larger account-backed files are not yet present in this folder.
