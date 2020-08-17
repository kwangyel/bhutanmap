import database from '../src/models';

class mapServices{
	static async getAlldzoThrom(){
		try{
			const result= await database.sequelize.query('select ST_AsGeoJSON(geom),name,thromdetyp,shape_area from dzo_thromdes;',)
			// const boundaries=result.map((row)=>{
			// 	let geojson=JSON.parse(row.st_asgeojson);
			// 	return geojson;
			// })
			
			return result[0]
		}catch(error){
			console.log(error)
		}
	}

	static async getBuilding(dzo){
		try {
			const result = await database.sequelize.query("select ST_AsGeoJSON(geom),osm_id from buildings_rectified where dzongkhag = '"+dzo+"';")
			return result[0]
		}catch (error){
			console.log(error)
		}
	}

	static async getZones(){
		try {
			const result = await database.sequelize.query("select ST_AsGeoJSON(geom),sub_zone,zone_id from zone_prj;") 
			return result[0]
		}catch (error){
			console.log(error)
		}
	}

	
}

export default mapServices;
