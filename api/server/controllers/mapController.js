import mapServices from '../services/mapServices';
import Util from '../utils/Utils';

const util=new Util();

class mapController{
	static async getAlldzoThrom(req,res){
		try{
			const dzoThromdes=await mapServices.getAlldzoThrom();
			if(dzoThromdes.length > 0){
				const result=dzoThromdes.map((row)=>{
					let geojson=JSON.parse(row.st_asgeojson);
					geojson.properties = { name: row.name, thromdetype: row.thromdetyp, area: row.shape_area }
					return geojson;
				})
				
				util.setSuccess(200,'Thromdes Retrieved',result);
			}else{
				util.setSuccess(200,'No Thromdes found');
			}
			return util.send(res);
		}catch(error){
			util.setError(400,error);
			
			return util.send(res);
		}
	}
	static async getBuildingThimphu(req,res){
		try{
			const buildings= await mapServices.getBuildingThimphu();
			if(buildings.length > 0){
				const result = buildings.map((row)=>{
					let geojson=JSON.parse(row.st_asgeojson);
					geojson.properties = {id: row.osm_id, name: row.name}
					return geojson;
				})
				util.setSuccess(200,'Buildings Retrieved',result);
			}else{
				util.setSuccess(200,'No buildings found');
			}
			return util.send(res);
		}catch(error){
			console.log(error);
			util.setError(400, error);
			return util.send(res);
		}
	}
}

export default mapController;
