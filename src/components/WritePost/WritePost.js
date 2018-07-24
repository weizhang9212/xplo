import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import { Route, Switch, Link } from 'react-router-dom';
import './WritePost.css'
import fakeData from '../PostShow/fakeData.js';


export default class WritePost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			photo: ''

		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert('An essay was submitted: ' + this.state.value);
		event.preventDefault();
	}

	selectFile = (target) => {
		const that = this;
		const maxsize = 200 * 1024;
		let file = target.files[0];
		var reader = new FileReader();

		reader.onload = function () {
			var result = this.result;
			var img = new Image();

			if (result.length <= maxsize) {
				this.toPreviewer(result);
				return;
			}

			img.onload = function () {
				var compressedDataUrl = that.compress(img, file.type);
				that.toPreviewer(compressedDataUrl);

				img = null;
			};

			img.src = result;
		};
		reader.readAsDataURL(file);
	}

	toPreviewer(dataUrl) {
		console.log(dataUrl);
		this.setState({ photo: dataUrl });
		this.props.setImg(dataUrl);
	}

	compress(img, fileType) {
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext('2d');

		var width = img.width;
		var height = img.height;

		canvas.width = width;
		canvas.height = height;

		ctx.fillStyle = "#fff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.drawImage(img, 0, 0, width, height);

		// 压缩
		var base64data = canvas.toDataURL(fileType, 0.4);

		var initSize = img.src.length;
		console.log('压缩前：', initSize);
		console.log('压缩后：', base64data.length);
		console.log('压缩率：', 100 * (initSize - base64data.length) / initSize, "%");

		canvas = ctx = null;
		return base64data;
	}

	render() {
		return (
			<div>
				<div className="Header">
					<Link to={"/"}>
						<i style={{ fontSize: '50px', color: 'black' }} className="material-icons ">keyboard_arrow_left</i>
					</Link>
					<span id="Title"><b>Preview</b></span>
					<Link to={"/"} style={{ textDecoration: 'none', paddingTop: '4%', }}>
						<span id="Next" style={{ color: 'black', }}><b>Publish</b></span>
					</Link>
				</div>
				<div className="Content">
					<textarea id="myTextArea" placeholder="Describe here!" style={{ border: 'none' }}
						value={this.state.value} onChange={this.handleChange}>
					</textarea>
					<div className="SubContent">
						<div className="Privacy" onClick={this.props.toPrivacy}>
							<span style={{ fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '6%', marginTop: '3%' }} > Privacy </span>
							<span style={{ fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '62%', marginTop: '3%' }} > {this.props.privacy} </span>
							<i style={{ paddingTop: '2.5%' }} className="material-icons">keyboard_arrow_right</i>
						</div>
						<Divider />
						<div className="Photo">
							<input type="file" id="file" className="inputFile"
								accept="image/*"
								onChange={(e) => this.selectFile(e.target)} />
							<span for="file" style={{ fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '6%', marginTop: '3%' }} >
								<label for="file">Choose Photo
							   </label><br />
							</span>
							<img id="ChosenImg" src={this.props.photo_url} onClick={this.props.toImage} />
						</div>
						<Divider />
						<div className="Emoji" onClick={this.props.toEmoji}>
							<span style={{ fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '6%', marginTop: '3%' }} > Emoji <br /></span>
							<span style={{ fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '70%', marginTop: '2%' }} > {String.fromCodePoint(this.props.emoji)} </span>
							<i style={{ paddingTop: '2.5%' }} className="material-icons">keyboard_arrow_right</i>
						</div>
						<Divider />
						<div className="Address">
							<span style={{ fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '6%', marginTop: '3%' }} > Address <br /></span>
							<i style={{ paddingTop: '2.5%', marginLeft: '70%' }} className="material-icons">keyboard_arrow_right</i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}