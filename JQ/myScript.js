let score = 0
let time = 0
let countdown_number = 3
let high = {
	name: '???',
	score: '00'
}

// 選擇地圖
let map_btn = 1
$('#map_btn_R').click(function () {
	if (map_btn < 3) {
		map_btn += 1
		$('#map_img').attr('src', `./image/map0${map_btn}.jpg`)
	} else {
		return
	}
})

$('#map_btn_L').click(function () {
	if (map_btn > 1) {
		map_btn -= 1
		$('#map_img').attr('src', `./image/map0${map_btn}.jpg`)
	} else {
		return
	}
})

// 這邊 個位數 如何置右?

// function btnBoxClickEvent() {
$('#btn').click(function () {
	// 初始畫面

	// why label input 無效?
	$(this).attr('disabled', true)

	$('#btn').css('backgroundColor', '#ccc')
	$('#btn').css('border', '3px solid #ddd')
	$('#btn').css('boxShadow', '5px 5px 1.5px #aaa')
	$('#btn').css('top', '458px')

	score = 0
	$('#score_number').text(score)
	time = 1
	$('#time_number').text(time)

	$('#map_btn_R').attr('disabled', true)
	$('#map_btn_L').attr('disabled', true)

	// 開始前3秒

	$('#game_content').css('backgroundColor', '#fff')
	$('#game_img').attr('src', `./image/WhereWilly04.png`)
	$('#number').css('display', `block`)
	$('#number').css('fontSize', `350px`)
	$('#number').text('3')
	countdown_number = 3

	let countdown = setInterval(function () {
		countdown_number -= 1
		$('#number').text(`${countdown_number}`)
		if (countdown_number === 1) {
			$('#number').css('left', '430px')
		}
	}, 1000)

	setTimeout(() => {
		clearInterval(countdown)
	}, 2000)

	// 3秒後進入遊戲
	setTimeout(() => {
		$('#game_img').attr('src', `./image/map0${map_btn}.jpg`)
		$('#number').css('display', `none`)

		// 開始遊戲 為什麼老師示範是前面變數設為 let timer = 0 ?
		let begin = setInterval(() => {
			// 遊戲空間(待製作)
			time--
			$('#time_number').text(time)

			// 時間到之後
			if (time === 0) {
				clearInterval(begin)
				// 開始鈕樣式復原
				$('#btn').css('backgroundColor', '#ff79a4')
				$('#btn').css('border', '0px')
				$('#btn').css('boxShadow', '8px 8px 1px #aaa')
				$('#btn').css('top', '460px')

				// 開始鈕+地圖選擇器 開
				$(this).attr('disabled', false)
				$('#map_btn_R').attr('disabled', false)
				$('#map_btn_L').attr('disabled', false)

				// 清空遊戲空間
				$('#game').empty()
				// 放回封面圖
				$('#game_img').attr('src', `./image/WhereWilly03.png`)
			}
		}, 1000)
	}, 3000)
})
// }

// btnBoxClickEvent()
