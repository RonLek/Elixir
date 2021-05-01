import React from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
export default class YoutubeApi extends React.Component {
	state = {
		youtubeData: [],
	};

	componentDidMount() {
		console.log("Props = ", this.props)
		axios
			.get(
				"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
					this.props.id.youtube.split("embed/")[1] +
					"&key=AIzaSyDzEnyN0_koN7kmc_goRLA_27RiA1Au2IM"
			)
			.then((res) => {
				// this.setState({ youtubeData: res.data["items"][0]["statistics"] });
				// console.log(res.data["items"][0]["statistics"]);
				if ("likeCount" in res.data["items"][0]["statistics"]) {
					this.setState({ youtubeData: res.data["items"][0]["statistics"] });
				} else {
					res.data["items"][0]["statistics"]["likeCount"] = "0";
					this.setState({ youtubeData: res.data["items"][0]["statistics"] });
					console.log(this.state.youtubeData);
				}
			});
	}
	render() {
		return (
			<>
			<h1 style={{textAlign:"center", marginTop: "20px"}}>{this.props.id.name}</h1>
			<Grid style={{ marginTop: "20px" }} container spacing={3}>
				<Grid item xs={6}>
					<div className="viewCount">
						<h2>
							{parseInt(this.state.youtubeData["viewCount"]).toLocaleString()}
						</h2>
						<p style={{ fontSize: "20px", color: "#808080" }}>
							Total View Count
						</p>
					</div>
				</Grid>
				<Grid item xs={6}>
					<div className="likeCount">
						<h2>
							{parseInt(this.state.youtubeData["likeCount"]).toLocaleString()}
						</h2>
						<p style={{ fontSize: "20px", color: "#808080" }}>
							Total Like Count
						</p>
					</div>
				</Grid>
			</Grid>
			</>
		);
	}
}