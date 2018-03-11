(function ($) {
	// bind mockup data with vuejs
	
	var data = {
		won_exchange : [
			{
				title: '비트코인',
				unit : 'BTC/KRW',
				currentPrice : '10,364,000',
				compareRatio : '-0.56%',
				price : '333,380',
				status : 'up'
			},
			{
				title: '에이다',
				unit : 'ADA/KRW',
				currentPrice : '223',
				compareRatio : '-1.76%',
				price : '91,194',
				status : 'down'
			},
			{
				title: '리플',
				unit : 'XRP/KRW',
				currentPrice : '877',
				compareRatio : '+0.92%',
				price : '38,315',
				status : 'up'
			},
			{
				title: '스테이터스네트워크토큰',
				unit : 'SNT/KRW',
				currentPrice : '877',
				compareRatio : '+0.92%',
				price : '38,315',
				status : 'up'
			},
			{
				title: '이더리움',
				unit : 'ETH/KRW',
				currentPrice : '776,100',
				compareRatio : '+1.28%',
				price : '12,904',
				status : 'down'
			},
			{
				title: '네오',
				unit : 'NEO/KRW',
				currentPrice : '96,150',
				compareRatio : '+0.67%',
				price : '11,514',
				status : 'up'
			},
			{
				title: '이더리움클래식',
				unit : 'ETC/KRW',
				currentPrice : '22,800',
				compareRatio : '-1.89%',
				price : '6,183',
				status : 'down'
			},
			{
				title: '퀄텀',
				unit : 'QTUM/KRW',
				currentPrice : '20,250',
				compareRatio : '1.05%',
				price : '5,415',
				status : 'up'
			},
			{
				title: '스텔라루멘',
				unit : 'XLM/KRW',
				currentPrice : '324',
				compareRatio : '1.25%',
				price : '5,091',
				status : 'down'
			},
			{
				title: '뉴이코노미무브먼트',
				unit : 'XEM/KRW',
				currentPrice : '376',
				compareRatio : '3.30%',
				price : '3,549',
				status : 'up'
			},
			{
				title: '라이트코인',
				unit : 'LTC/KRW',
				currentPrice : '202,550',
				compareRatio : '+2.19%',
				price : '3,509',
				status : 'down'
			},
			{
				title: '오미세고',
				unit : 'OMG/KRW',
				currentPrice : '15,180',
				compareRatio : '+1.40%',
				price : '2,618',
				status : 'up'
			},
			{
				title: '비트코인캐시',
				unit : 'BCC/KRW',
				currentPrice : '1,126,000',
				compareRatio : '+0.09%',
				price : '1,520',
				status : 'down'
			},
			{
				title: '스팀달러',
				unit : 'SBD/KRW',
				currentPrice : '2,590',
				compareRatio : '-1.52%',
				price : '840',
				status : 'up'
			},
			{
				title: '스팀',
				unit : 'STEEM/KRW',
				currentPrice : '2,585',
				compareRatio : '-2.64%',
				price : '798',
				status : 'down'
			},
			{
				title: '비트코인골드',
				unit : 'BTG/KRW',
				currentPrice : '87,450',
				compareRatio : '-0.05%',
				price : '766',
				status : 'up'
			},
			{
				title: '아더',
				unit : 'ARDR/KRW',
				currentPrice : '305',
				compareRatio : '0.33%',
				price : '758',
				status : 'up'
			},
			{
				title: '블록톡스',
				unit : 'TIX/KRW',
				currentPrice : '491',
				compareRatio : '-3.91%',
				price : '646',
				status : 'down'
			},
			{
				title: '리스트',
				unit : 'LSK/KRW',
				currentPrice : '15,750',
				compareRatio : '-1.19%',
				price : '546',
				status : 'up'
			},
			{
				title: '모네로',
				unit : 'XMR/KRW',
				currentPrice : '287,350',
				compareRatio : '+1.04%',
				price : '488',
				status : 'up'
			},
			{
				title: '스트라티스',
				unit : 'STRAT/KRW',
				currentPrice : '5,875',
				compareRatio : '-1.26%',
				price : '402',
				status : 'down'
			},
			{
				title: '아인스타이늄',
				unit : 'EMC2/KRW',
				currentPrice : '1,165',
				compareRatio : '+5.43%',
				price : '392',
				status : 'up'
			},
			{
				title: '파워렛저',
				unit : 'POWR/KRW',
				currentPrice : '448',
				compareRatio : '-2.24%',
				price : '349',
				status : 'down'
			},
			{
				title: '머큐리',
				unit : 'MER/KRW',
				currentPrice : '261',
				compareRatio : '-0.76%',
				price : '195',
				status : 'up'
			},
			{
				title: '메탈',
				unit : 'MTL/KRW',
				currentPrice : '4,215',
				compareRatio : '-1.75%',
				price : '176',
				status : 'down'
			},
			{
				title: '코모도',
				unit : 'KMD/KRW',
				currentPrice : '3,720',
				compareRatio : '1.92%',
				price : '150',
				status : 'down'
			},
			{
				title: '피벡스',
				unit : 'PIVX/KRW',
				currentPrice : '4,885',
				compareRatio : '+1.12%',
				price : '140',
				status : 'down'
			},
			{
				title: '버트코인',
				unit : 'VTC/KRW',
				currentPrice : '2,985',
				compareRatio : '+3.02%',
				price : '92',
				status : 'up'
			},
			{
				title: '대시',
				unit : 'DASH/KRW',
				currentPrice : '532,900',
				compareRatio : '+2.22%',
				price : '73',
				status : 'up'
			},
			{
				title: '웨이브',
				unit : 'WAVES/KRW',
				currentPrice : '6,900',
				compareRatio : '-2.27%',
				price : '90',
				status : 'down'
			},
			{
				title: '지캐시',
				unit : 'ZEC/KRW',
				currentPrice : '31,900',
				compareRatio : '-4.82%',
				price : '73',
				status : 'down'
			},
			{
				title: '아크',
				unit : 'ARK/KRW',
				currentPrice : '3,510',
				compareRatio : '+1.89%',
				price : '73',
				status : 'down'
			},
			{
				title: '그로스톨코인',
				unit : 'GRS/KRW',
				currentPrice : '556',
				compareRatio : '-2.29%',
				price : '69',
				status : 'up'
			},
			{
				title: '어거',
				unit : 'REP/KRW',
				currentPrice : '36,810',
				compareRatio : '-1.50%',
				price : '66',
				status : 'up'
			}
		],
		BTC : [
			{
				title: '누비츠',
				unit : 'NBT/KRW',
				currentPrice : '0.00011410',
				compareRatio : '+0.43%',
				price : '2,400.871',
				krw : '1,119',
				status : 'up'
			},
			{
				title: '에이다',
				unit : 'ADA/KRW',
				currentPrice : '0.00011464',
				compareRatio : '-1.35%',
				price : '2,140.871',
				krw : '224',
				status : 'down'
			},
			{
				title: '이더리움',
				unit : 'ETH/KRW',
				currentPrice : '0.07911464',
				compareRatio : '1.58%',
				price : '2,027.871',
				krw : '778,799',
				status : 'down'
			},
			{
				title: '뉴이코노미무브먼트',
				unit : 'XEM/KRW',
				currentPrice : '0.00003757',
				compareRatio : '1.40%',
				price : '1,197.871',
				krw : '370',
				status : 'up'
			},
			{
				title: '트론',
				unit : 'TRX/KRW',
				currentPrice : '0.00000399',
				compareRatio : '1.01%',
				price : '1,031.871',
				krw : '39.35',
				status : 'down'
			},
			{
				title: '시린토큰',
				unit : 'SRN/KRW',
				currentPrice : '0.00006651',
				compareRatio : '-3.05%',
				price : '972.447',
				krw : '656',
				status : 'up'
			},
			{
				title: '모네로',
				unit : 'XMR/KRW',
				currentPrice : '0.02922499',
				compareRatio : '-2.95%',
				price : '853.447',
				krw : '288,736',
				status : 'down'
			},
			{
				title: '리플',
				unit : 'XRP/KRW',
				currentPrice : '0.00008948',
				compareRatio : '+1.03%',
				price : '808.597',
				krw : '880',
				status : 'up'
			},
			{
				title: '비아코인',
				unit : 'VIA/KRW',
				currentPrice : '0.00022549',
				compareRatio : '+0.18%',
				price : '771.371',
				krw : '2,218',
				status : 'up'
			},
			{
				title: '살루스',
				unit : 'SLS/KRW',
				currentPrice : '0.00927386',
				compareRatio : '-4.15%',
				price : '704.371',
				krw : '91,231',
				status : 'down'
			},
			{
				title: '코파운드잇',
				unit : 'CFI/KRW',
				currentPrice : '0.00001251',
				compareRatio : '+3.39%',
				price : '645.370',
				krw : '323',
				status : 'up'
			},
			{
				title: '스텔라루멘',
				unit : 'XLM/KRW',
				currentPrice : '0.00003283',
				compareRatio : '+0.40%',
				price : '645.225',
				krw : '124',
				status : 'down'
			},
			{
				title: '라이트코인',
				unit : 'LTC/KRW',
				currentPrice : '0.02058800',
				compareRatio : '+1.80%',
				price : '645.845',
				krw : '203,196',
				status : 'up'
			},
			{
				title: '루프링',
				unit : 'LRC/KRW',
				currentPrice : '0.00004054',
				compareRatio : '+2.20%',
				price : '640.845',
				krw : '203,031',
				status : 'down'
			},
			{
				title: '이더리움클래식',
				unit : 'ETC/KRW',
				currentPrice : '0.00232549',
				compareRatio : '-0.75%',
				price : '559.562',
				krw : '22,859',
				status : 'down'
			},
			{
				title: '네오',
				unit : 'NEO/KRW',
				currentPrice : '0.000974749',
				compareRatio : '+1.95%',
				price : '524.913',
				krw : '95,886',
				status : 'up'
			},
			{
				title: '버지',
				unit : 'XVG/KRW',
				currentPrice : '0.00000418',
				compareRatio : '+1.21%',
				price : '489.913',
				krw : '41.15',
				status : 'up'
			},
			{
				title: '비트코인캐시',
				unit : 'BCC/KRW',
				currentPrice : '0.11536183',
				compareRatio : '+0.74%',
				price : '464.913',
				krw : '1,133,970',
				status : 'up'
			},
			{
				title: '페이션토리',
				unit : 'PTOY/KRW',
				currentPrice : '0.11519400',
				compareRatio : '-0.60%',
				price : '464.882',
				krw : '183',
				status : 'down'
			},
			{
				title: '웨이브',
				unit : 'WAVES/KRW',
				currentPrice : '0.00061600',
				compareRatio : '-1.34%',
				price : '390.168',
				krw : '6.067',
				status : 'down'
			}
		
		
		
		],
		ETH : [
			{
				title: '이더리움클래식',
				unit : 'ETC/KRW',
				currentPrice : '0.00232549',
				compareRatio : '-0.75%',
				price : '559.562',
				krw : '22,859',
				status : 'down'
			},
			{
				title: '네오',
				unit : 'NEO/KRW',
				currentPrice : '0.000974749',
				compareRatio : '+1.95%',
				price : '524.913',
				krw : '95,886',
				status : 'up'
			},
			{
				title: '버지',
				unit : 'XVG/KRW',
				currentPrice : '0.00000418',
				compareRatio : '+1.21%',
				price : '489.913',
				krw : '41.15',
				status : 'up'
			},
			{
				title: '비트코인캐시',
				unit : 'BCC/KRW',
				currentPrice : '0.11536183',
				compareRatio : '+0.74%',
				price : '464.913',
				krw : '1,133,970',
				status : 'up'
			},
			{
				title: '페이션토리',
				unit : 'PTOY/KRW',
				currentPrice : '0.11519400',
				compareRatio : '-0.60%',
				price : '464.882',
				krw : '183',
				status : 'down'
			},
			{
				title: '웨이브',
				unit : 'WAVES/KRW',
				currentPrice : '0.00061600',
				compareRatio : '-1.34%',
				price : '390.168',
				krw : '6.067',
				status : 'down'
			},
			{
				title: '누비츠',
				unit : 'NBT/KRW',
				currentPrice : '0.00011410',
				compareRatio : '+0.43%',
				price : '2,400.871',
				krw : '1,119',
				status : 'up'
			},
			{
				title: '에이다',
				unit : 'ADA/KRW',
				currentPrice : '0.00011464',
				compareRatio : '-1.35%',
				price : '2,140.871',
				krw : '224',
				status : 'down'
			},
			{
				title: '이더리움',
				unit : 'ETH/KRW',
				currentPrice : '0.07911464',
				compareRatio : '1.58%',
				price : '2,027.871',
				krw : '778,799',
				status : 'down'
			},
			{
				title: '뉴이코노미무브먼트',
				unit : 'XEM/KRW',
				currentPrice : '0.00003757',
				compareRatio : '1.40%',
				price : '1,197.871',
				krw : '370',
				status : 'up'
			},
			{
				title: '트론',
				unit : 'TRX/KRW',
				currentPrice : '0.00000399',
				compareRatio : '1.01%',
				price : '1,031.871',
				krw : '39.35',
				status : 'down'
			},
			{
				title: '시린토큰',
				unit : 'SRN/KRW',
				currentPrice : '0.00006651',
				compareRatio : '-3.05%',
				price : '972.447',
				krw : '656',
				status : 'up'
			},
			{
				title: '모네로',
				unit : 'XMR/KRW',
				currentPrice : '0.02922499',
				compareRatio : '-2.95%',
				price : '853.447',
				krw : '288,736',
				status : 'down'
			},
			{
				title: '리플',
				unit : 'XRP/KRW',
				currentPrice : '0.00008948',
				compareRatio : '+1.03%',
				price : '808.597',
				krw : '880',
				status : 'up'
			},
			{
				title: '비아코인',
				unit : 'VIA/KRW',
				currentPrice : '0.00022549',
				compareRatio : '+0.18%',
				price : '771.371',
				krw : '2,218',
				status : 'up'
			},
			{
				title: '살루스',
				unit : 'SLS/KRW',
				currentPrice : '0.00927386',
				compareRatio : '-4.15%',
				price : '704.371',
				krw : '91,231',
				status : 'down'
			},
			{
				title: '코파운드잇',
				unit : 'CFI/KRW',
				currentPrice : '0.00001251',
				compareRatio : '+3.39%',
				price : '645.370',
				krw : '323',
				status : 'up'
			},
			{
				title: '스텔라루멘',
				unit : 'XLM/KRW',
				currentPrice : '0.00003283',
				compareRatio : '+0.40%',
				price : '645.225',
				krw : '124',
				status : 'down'
			},
			{
				title: '라이트코인',
				unit : 'LTC/KRW',
				currentPrice : '0.02058800',
				compareRatio : '+1.80%',
				price : '645.845',
				krw : '203,196',
				status : 'up'
			},
			{
				title: '루프링',
				unit : 'LRC/KRW',
				currentPrice : '0.00004054',
				compareRatio : '+2.20%',
				price : '640.845',
				krw : '203,031',
				status : 'down'
			}
		],
		USDT : [
			{
				title: '살루스',
				unit : 'SLS/KRW',
				currentPrice : '0.00927386',
				compareRatio : '-4.15%',
				price : '704.371',
				krw : '91,231',
				status : 'down'
			},
			{
				title: '코파운드잇',
				unit : 'CFI/KRW',
				currentPrice : '0.00001251',
				compareRatio : '+3.39%',
				price : '645.370',
				krw : '323',
				status : 'up'
			},
			{
				title: '스텔라루멘',
				unit : 'XLM/KRW',
				currentPrice : '0.00003283',
				compareRatio : '+0.40%',
				price : '645.225',
				krw : '124',
				status : 'down'
			},
			{
				title: '라이트코인',
				unit : 'LTC/KRW',
				currentPrice : '0.02058800',
				compareRatio : '+1.80%',
				price : '645.845',
				krw : '203,196',
				status : 'up'
			},
			{
				title: '루프링',
				unit : 'LRC/KRW',
				currentPrice : '0.00004054',
				compareRatio : '+2.20%',
				price : '640.845',
				krw : '203,031',
				status : 'down'
			},
			{
				title: '이더리움클래식',
				unit : 'ETC/KRW',
				currentPrice : '0.00232549',
				compareRatio : '-0.75%',
				price : '559.562',
				krw : '22,859',
				status : 'down'
			},
			{
				title: '네오',
				unit : 'NEO/KRW',
				currentPrice : '0.000974749',
				compareRatio : '+1.95%',
				price : '524.913',
				krw : '95,886',
				status : 'up'
			},
			{
				title: '버지',
				unit : 'XVG/KRW',
				currentPrice : '0.00000418',
				compareRatio : '+1.21%',
				price : '489.913',
				krw : '41.15',
				status : 'up'
			},
			{
				title: '비트코인캐시',
				unit : 'BCC/KRW',
				currentPrice : '0.11536183',
				compareRatio : '+0.74%',
				price : '464.913',
				krw : '1,133,970',
				status : 'up'
			},
			{
				title: '페이션토리',
				unit : 'PTOY/KRW',
				currentPrice : '0.11519400',
				compareRatio : '-0.60%',
				price : '464.882',
				krw : '183',
				status : 'down'
			},
			{
				title: '웨이브',
				unit : 'WAVES/KRW',
				currentPrice : '0.00061600',
				compareRatio : '-1.34%',
				price : '390.168',
				krw : '6.067',
				status : 'down'
			},
			{
				title: '누비츠',
				unit : 'NBT/KRW',
				currentPrice : '0.00011410',
				compareRatio : '+0.43%',
				price : '2,400.871',
				krw : '1,119',
				status : 'up'
			},
			{
				title: '에이다',
				unit : 'ADA/KRW',
				currentPrice : '0.00011464',
				compareRatio : '-1.35%',
				price : '2,140.871',
				krw : '224',
				status : 'down'
			},
			{
				title: '이더리움',
				unit : 'ETH/KRW',
				currentPrice : '0.07911464',
				compareRatio : '1.58%',
				price : '2,027.871',
				krw : '778,799',
				status : 'down'
			},
			{
				title: '뉴이코노미무브먼트',
				unit : 'XEM/KRW',
				currentPrice : '0.00003757',
				compareRatio : '1.40%',
				price : '1,197.871',
				krw : '370',
				status : 'up'
			},
			{
				title: '트론',
				unit : 'TRX/KRW',
				currentPrice : '0.00000399',
				compareRatio : '1.01%',
				price : '1,031.871',
				krw : '39.35',
				status : 'down'
			},
			{
				title: '시린토큰',
				unit : 'SRN/KRW',
				currentPrice : '0.00006651',
				compareRatio : '-3.05%',
				price : '972.447',
				krw : '656',
				status : 'up'
			},
			{
				title: '모네로',
				unit : 'XMR/KRW',
				currentPrice : '0.02922499',
				compareRatio : '-2.95%',
				price : '853.447',
				krw : '288,736',
				status : 'down'
			},
			{
				title: '리플',
				unit : 'XRP/KRW',
				currentPrice : '0.00008948',
				compareRatio : '+1.03%',
				price : '808.597',
				krw : '880',
				status : 'up'
			},
			{
				title: '비아코인',
				unit : 'VIA/KRW',
				currentPrice : '0.00022549',
				compareRatio : '+0.18%',
				price : '771.371',
				krw : '2,218',
				status : 'up'
			}
		]
	};
	
	new Vue({
		el: '#left-data-exchange',
		data: {
			items: data.won_exchange
		}
	});
	
	new Vue({
		el: '#left-data-btc',
		data: {
			items: data.BTC
		}
	});
	
	new Vue({
		el: '#left-data-eth',
		data: {
			items: data.ETH
		}
	});
	
	new Vue({
		el: '#left-data-usdt',
		data: {
			items: data.USDT
		}
	});
	
	
}(jQuery));
