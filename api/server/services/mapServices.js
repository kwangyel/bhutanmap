import database from '../src/models';

class mapServices{
	static async getZones(){
		try {
			const result = await database.sequelize.query("select ST_AsGeoJSON(geom),sub_zone,zone_id from zone_prj;") 
			return result[0]
		}catch (error){
			console.log(error)
		}
	}

	static async checkZoneofPoint(lat,lng){
		try{
			const result = await database.sequelize.query("select a.zone_id from public.zone_prj a where ST_Intersects(ST_SetSRID(ST_Point("+lng+","+lat+"),4326), a.geom);")
			return result[0]
		}catch(error){
			throw error
		}
	}

	static async getZone(zone_id){
		try{
			const result = await database.Zones.findOne({
				where:{zone_id: Number(zone_id)},
			})
			return result
		}catch(error){
			throw error
		}
	}
}
export default mapServices;
