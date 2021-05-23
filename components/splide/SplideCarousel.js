import React, { Component, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useTransition, useSpringRef, animated } from 'react-spring';

export default class SplideCarousel extends Component {
	constructor(props) {
		super(props);

		this.primaryRef = React.createRef();
		this.secondaryRef = React.createRef();

		this.leftbarRef0 = React.createRef();
		this.leftbarRef1 = React.createRef();
		this.leftbarRef2 = React.createRef();

		this.state = {
			chars: [
				{
					visible: false,
					name: 'compound',
					charRef: React.createRef(),
					leftbarRef: React.createRef(),
					rightbarRef: React.createRef(),
				},
				{
					visible: false,
					name: 'luna',
					charRef: React.createRef(),
					leftbarRef: React.createRef(),
					rightbarRef: React.createRef(),
				},
				{
					visible: false,
					name: 'binance',
					charRef: React.createRef(),
					leftbarRef: React.createRef(),
					rightbarRef: React.createRef(),
				},
				{
					visible: false,
					name: 'monero',
					charRef: React.createRef(),
					leftbarRef: React.createRef(),
					rightbarRef: React.createRef(),
				},
				{
					visible: false,
					name: 'polkadot',
					charRef: React.createRef(),
					leftbarRef: React.createRef(),
					rightbarRef: React.createRef(),
				},
				{
					visible: false,
					name: 'xlm',
					charRef: React.createRef(),
					leftbarRef: React.createRef(),
					rightbarRef: React.createRef(),
				},
				{
					visible: false,
					name: 'hashgraph',
					charRef: React.createRef(),
					leftbarRef: React.createRef(),
					rightbarRef: React.createRef(),
				},
			],
		};
	}

	componentDidMount() {
		// leftbarRefs = [this.leftbarRef0, this.leftbarRef1, this.leftbarRef2];
		// Set the sync target right after the component is mounted.
		// this.primaryRef.current.sync(this.secondaryRef.current.splide);
	}

	move(data) {
		// Fired right before a slider moves.
		console.log('move');
		// console.log(data);
		// const chars = this.state.chars;
		// chars[data.newIndex].visible = true;
		// chars[data.oldIndex].visible = false;
		// this.setState(({ chars }) => ({ chars }));
		// console.log(this.state.chars[data.newIndex]);
		// console.log(this.state.chars[data.oldIndex]);
	}

	moved(data) {
		// Fired right after a slider moves.

		console.log('moved');
		console.log(data);
		const chars = this.state.chars;
		chars[data.newIndex].visible = true;
		chars[data.oldIndex].visible = false;
		this.setState(({ chars }) => ({ chars }));
		console.log(this.state.chars[data.newIndex]);
		console.log(this.state.chars[data.oldIndex]);
	}

	drag(data) {
		// Fired when dragging/swiping is started.
		console.log('drag');
	}

	dragged(data) {
		// Fired right after dragging/swiping is finished.
		console.log('dragged');
	}

	visible(data) {
		// Fired when a slide is made visible on a view port.
		// console.log('visible');
		// const slide = this.state.chars[data.index];
		// console.log(slide);
		// console.log(slide.name, slide.leftbarRef.current);
	}

	hidden(data) {
		// Fired when a slide is made hidden from a view port.
		// console.log('hidden');
		// console.log(data.index);
		// if (data.index != 0) {
		// 	console.log(this.state.chars[0].leftbarRef.current);
		// }
	}

	render() {
		const options = {
			type: 'loop',
			perPage: 1,
			perMove: 1,
			lazyLoad: true,
			pagination: true,
		};

		// const transitions = useTransition(this.state.chars[0], )

		return (
			<div className="bg-blue-400">
				<Splide
					options={options}
					onMove={(s, newIndex, oldIndex, destIndex) => this.move({ newIndex, oldIndex, destIndex })}
					onMoved={(s, newIndex, oldIndex, destIndex) => this.moved({ newIndex, oldIndex, destIndex })}
					onVisible={(s, Slide) => this.visible(Slide)}
					onHidden={(s, Slide) => this.hidden(Slide)}
				>
					{this.state.chars.map((charObj, index) => {
						const char = charObj.name;

						return (
							<SplideSlide key={index}>
								<div className="container flex justify-center mx-auto">
									<div className="outer flex justify-center mx-auto">
										<div className="inner bg-pink-500 flex justify-center mx-auto">
											<div ref={charObj.leftbarRef} className="left-side z-50 absolute">
												<img src={`./splide/${char}_left.png`} alt={`${char} left bar`} />
											</div>

											<div ref={charObj.charRef} className="z-40">
												<img src={`./splide/${char}.png`} alt={`${char} image`} />
											</div>
											<div className="right-side z-30 absolute ">
												<div ref={charObj.rightbarRef} className="animate-wiggle">
													<img src={`./splide/${char}_right.png`} alt={`${char} right bar`} />
												</div>
											</div>
										</div>
									</div>
								</div>
							</SplideSlide>
						);
					})}
				</Splide>
			</div>
		);
	}
}
