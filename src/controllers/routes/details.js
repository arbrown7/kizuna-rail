import { getRouteById, getSchedulesByRoute, getMonthNames } from '../../models/model.js';

export default async (req, res) => {
    const { routeId } = req.params;
    const details = await getRouteById(routeId);
    details.schedules = await getSchedulesByRoute(routeId);
    
    //AI helped me figure out to use .map on the array
    details.operatingMonths = details.operatingMonths.map(getMonthNames);

    // TODO: getCompleteRouteDetails instead

    res.render('routes/details', {
        title: 'Route Details',
        details
    });
};