import mapServices from '../services/mapServices';
import Util from '../utils/Utils';

const util=new Util();

class mapController{

	static async getZone(req,res){
		try{
			const zones =await mapServices.getZones();
			if(zones.length > 0){
				const result = zones.map((row)=>{
					let geojson=JSON.parse(row.st_asgeojson);
					geojson.properties = { name: row.sub_zone, zone_id: row.zone_id }
					return geojson;
				})
				
				util.setSuccess(200,'Zones Retrieved',result);
			}else{
				util.setSuccess(200,'No zones found');
			}
			return util.send(res);
		}catch(error){
			util.setError(400,error);
			
			return util.send(res);
		}
	}


	static async getZone(req,res){
		const zoneid = req.body.zone_id
		try{
			const result = await mapServices.getZone(zoneid)
			console.log(result)
			util.setSuccess(200,"success")
			util.setData(result)
			return util.send(res)

		}catch(error){
			console.log(error)
			return res.json({
				"data":error
			})
		}
	}
	
	static async checkPointInZone(req,res){
		const zone_id = req.body.zone_id;
		const lat = req.body.lat;
		const lng = req.body.lng;
		try{
			const valid_zone = await mapServices.getZone(zone_id)
			if(valid_zone){
				const pointZone = await mapServices.checkZoneofPoint(lat,lng)
				if(pointZone[0]['zone_id'] == zone_id){
					util.setSuccess(200,"Location within zone")
				}else{
					util.setFailure(200,"Location outside zone")
				}
			}else{
				util.setError(400,"Zone id not found")
			}
			return util.send(res);
		}catch(error){
			console.log(error)
			util.setError(400,error)
			return util.send(res)
		}
	}
}

export default mapController;
