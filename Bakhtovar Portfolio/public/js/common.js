        const counter = document.getElementById('ton')
        const mainText = document.getElementById('total')
        const mainPrice = document.getElementById('price')
        let allCounts = Number(counter.value)
        let intPrice = Number(mainPrice.value)

        function plus() {
            counter.value++
        }
        function minus() {
            counter.value--
        }
        function buy(a, b) {
            // let c = Number(a) * Number(b)
            mainText.innerHTML = `You get: ${Number(mainPrice.value) / Number(counter.value)} TON`
            console.log(counter.value)
            console.log(mainPrice.value)
        }

        function sell(a, b) {
            // let c = Number(a) * Number(b)
            mainText.innerHTML = `You get: ${Number(counter.value) * Number(mainPrice.value)} USDT`
        }