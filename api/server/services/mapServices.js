import database from '../src/models';

class mapServices{

	//get a subzone feature with zoneid provided
	static async getZone(zoneid){
		try {
			const result = await database.sequelize.query("select ST_AsGeoJSON(geom),subzoneid from sub_zones where subzoneid = "+zoneid+";") 
			return result[0]
		}catch (error){
			console.log(error)
		}
	}

	// static async checkZoneofPoint(lat,lng){
	// 	try{
	// 		const result = await database.sequelize.query("select a.zone_id from public.zone_prj a where ST_Intersects(ST_SetSRID(ST_Point("+lng+","+lat+"),4326), a.geom);")
	// 		return result[0]
	// 	}catch(error){
	// 		throw error
	// 	}
	// }

	
	// static async getBuildingPoints(zoneid){
	// 	try {
	// 		const result = await database.sequelize.query('select ST_AsGeoJSON(geom),id,block from thimphu_onlyzone where block='+zoneid+';')
	// 		return result[0]
	// 	}catch (error){
	// 		console.log(error)
	// 	}
	// }

	static async searchAddress(address){
		try{
			// const result = await database.sequelize.query("SELECT gid, objectid, __gid, bldg_num, street_pry, remarks, street_id, geom FROM public.building_prj where street_pry = '"+st_name+"' AND bldg_num = '"+b_name+"';");
			// const result = await database.sequelize.query("Select * from public.building_prj where SIMILARITY(street_pry,'"+st_name+"') > 0.3 and SIMILARITY(bldg_num,'"+b_name+"')>0.7;");
			//using Levenshtein algo as it yielded better results. Returns top five matches in order
			const result = await database.sequelize.query("SELECT * FROM building_address where LEVENSHTEIN(address, '"+address+"')<7 ORDER BY LEVENSHTEIN(address, '"+address+"') ASC LIMIT 5;");

			return result[0]
		}catch(error){
			console.log(error)
			throw error
		}
	}
}
export default mapServices;
