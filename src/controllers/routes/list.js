import { getAllRoutes, getListOfRegions, getListOfSeasons, getRoutesByRegion, getRoutesBySeason } from '../../models/model.js';

export default async (req, res) => {
    const regionSort = req.query.region || '';
    const seasonSort = req.query.season || '';

    const regions = await getListOfRegions();
    let routes = await getAllRoutes();
    const seasons = await getListOfSeasons();
    
    if (regionSort && seasonSort) {
        routes = await getRoutesByRegion(regionSort);

        //***AI Generated Code***
        routes = routes.filter(route =>
            route.bestSeason.toLowerCase() === seasonSort.toLowerCase()
        );
        //***End of AI Code***/

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