let passwordLength = 8

        const inputEl = document.querySelector("#password")
        const selectUpperCaseChars = document.querySelector("#uppercase-check")
        const selectSymbolChars = document.querySelector("#symbol-check")
        const selectNumbersChars = document.querySelector("#number-check")
        let lengthDePassword = document.querySelector("#password-length-text")
        const securityIndicatorBarEl = document.querySelector("#security-indicator-bar")

        function geradorDeSenha() {
            let chars = "abcedefgh1jklmnopqrstuvxz"
            let password = ""

            const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVXZ'
            const numberChars = "123456789"
            const symbolchars = '!@#$%&()[]*'

            if (selectUpperCaseChars.checked) {
                chars += upperCaseChars
            }

            if (selectNumbersChars.checked) {
                chars += numberChars
            }

            if (selectSymbolChars.checked) {
                chars += symbolchars
            }

            for (let i = 0; i < passwordLength; i++) {
                const aletorioNumber = Math.floor(Math.random() * chars.length)
                password += chars.substring(aletorioNumber, aletorioNumber + 1)
            }
            inputEl.value = password

            calculateQaulity()
            calculateSize ()
        }

        function calculateQaulity  ()  {
            const percent = Math.round(
                (passwordLength/16) * 25 + (selectUpperCaseChars.checked ? 10 : 0)) +
                (selectNumbersChars.checked ? 30 : 0) +
                (selectSymbolChars.checked ? 35 : 0)


            securityIndicatorBarEl.style.width = `${percent}%`

            if(percent < 45 ) {
                securityIndicatorBarEl.style.background = "#eb5757"
            }

            if(percent > 45 && percent < 75) {
                securityIndicatorBarEl.style.background = "#f2c94c"
            }

            if(percent > 75 ) {
                securityIndicatorBarEl.style.background = "#27ae60"
            }

            if (percent >= 100) {
                securityIndicatorBarEl.classList.add("completed")
            } else {
                securityIndicatorBarEl.classList.remove("completed")
            }
        }

        function calculateSize () {
            if(passwordLength > 10 && passwordLength <= 13) {
            inputEl.classList.add("font-sm")
            inputEl.classList.remove("font-xs")
            inputEl.classList.remove("font-xxs")
            }

            else if (passwordLength > 13) {
            inputEl.classList.remove("font-sm")
            inputEl.classList.add("font-xs")
            inputEl.classList.remove("font-xxs")
            }

            else if (passwordLength > 14) {
                inputEl.classList.remove("font-sm")
                inputEl.classList.remove("font-xs")
                inputEl.classList.add("font-xxs")

            } else {
                inputEl.classList.remove("font-sm")
                inputEl.classList.remove("font-xs")
                inputEl.classList.remove("font-xxs")
            }

        }

        function copy() {
            navigator.clipboard.writeText(inputEl.value)
        }

        const passwordLengthEl = document.querySelector("#password-length")

        passwordLengthEl.addEventListener("input", function () {
            passwordLength = passwordLengthEl.value
            lengthDePassword.innerText = passwordLength
            geradorDeSenha()
        })

        selectUpperCaseChars.addEventListener("click", geradorDeSenha)
        selectNumbersChars.addEventListener("click", geradorDeSenha)
        selectSymbolChars.addEventListener("click", geradorDeSenha)

        document.querySelector("#copy-1").addEventListener("click", copy)
        document.querySelector("#copy-2").addEventListener("click", copy)
        document.querySelector("#renew").addEventListener("click", geradorDeSenha)

        geradorDeSenha()
