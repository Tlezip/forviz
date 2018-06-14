const db = require('../db')

exports.searchAPI = (req, res) => {
        const { uniq_id, property_type, city, amenities, room_price, location, radius } = req.query
        const uniq_idSQL = uniq_id ? 'uniq_id = \'' + uniq_id + '\'' : ''
        const property_typeSQL = property_type ? 'property_type = \'' + property_type + '\'' : ''
        const citySQL = city ? 'city = \'' + city + '\'' : ''
        const amenitiesSQL = amenities ? 'amenities LIKE \'%' + amenities + '%\'' : ''
        let locationSQL = ''
        if(location){
            let locationX = location.split(',')[0]
            let locationY = location.split(',')[1]
            if(radius){
                locationSQL = 'POWER(latitude - ' + locationX + ',2) + POWER(longitude - ' + locationY + ',2) <= POWER(' + radius + ',2)' 
            } else {
                locationSQL = 'latitude = ' + locationX + ' AND longitude = ' + locationY
            }
        }
        let maxPrice,minPrice
        if(room_price){
            minPrice = room_price.split("-")[0]
            maxPrice = room_price.split("-")[1]
        }
        const room_priceSQL = room_price && minPrice && maxPrice ? 'room_price >= ' + minPrice + ' AND room_price <= ' + maxPrice : ''
        let searchSQL = ''
        if(uniq_idSQL != '')    searchSQL += uniq_idSQL
        if(property_typeSQL != ''){
            if(searchSQL == '') searchSQL += property_typeSQL
            else searchSQL += (' AND ' + property_typeSQL)
        }
        if(citySQL != ''){
            if(searchSQL == '') searchSQL += citySQL
            else searchSQL += (' AND ' + citySQL)
        }
        if(amenitiesSQL != ''){
            if(searchSQL == '') searchSQL += amenitiesSQL
            else searchSQL += (' AND ' + amenitiesSQL)
        }
        if(room_priceSQL != ''){
            if(searchSQL == '') searchSQL += room_priceSQL
            else searchSQL += (' AND ' + room_priceSQL)
        }
        if(locationSQL != ''){
            if(searchSQL == '') searchSQL += locationSQL
            else searchSQL += (' AND ' + locationSQL)
        }
        db.query("SELECT * FROM properties WHERE " + searchSQL , (err, result) => {
            res.json(result)
        })
}