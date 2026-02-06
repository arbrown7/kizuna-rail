import { getAllRoutes, getListOfRegions, getListOfSeasons, getRoutesByRegion, getRoutesBySeason } from '../../models/model.js';

export default async (req, res) => {
    const regionSort = req.query.region || '';
    const seasonSort = req.query.season || '';

    const regions = await getListOfRegions();
    const routes = await getAllRoutes();
    const seasons = await getListOfSeasons();
    
    if (regionSort && seasonSort) {
        //TODO sort by region and season

    } else if (regionSort) {
        routes = await getRoutesByRegion(regionSort);
    } else if (seasonSort) {
        routes = await getRoutesBySeason(seasonSort);
    }

    res.render('routes/list', {
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons
    });
};