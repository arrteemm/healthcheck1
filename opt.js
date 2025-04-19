getElementById('surveyForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let score = 0;

        // Подсчет значений для каждого вопроса
        const questions = [
            'fatigue', 'weightLoss', 'chronicPain',
            'moleChanges', 'unusualBleeding', 'swallowingAppetite',
            'infections', 'familyHistory', 'urinationChanges',
            'smokingAlcohol', 'carcinogens', 'medicalChecks'
        ];

        // Подсчет значений
        questions.forEach(function(question) {
            const answer = document.querySelector(`input[name="${question}"]:checked`);
            if (answer) {
                score += parseInt(answer.value); // Преобразование значения в число и прибавление
            }
        });

        // Определение результата
        const resultDiv = document.getElementById('result');
        const doctorSiteButton = document.getElementById('doctorSiteButton');
        let message;
        
        if (score >= 17) {
            message = 'Вам следует обратиться к врачу. Возможные проблемы со здоровьем.';
            doctorSiteButton.style.display = 'block'; // Показываем кнопку, если нужно обратиться к врачу
        } else {
            message = 'Нет явных признаков, чтобы обратиться к врачу.';
            doctorSiteButton.style.display = 'none'; // Скрываем кнопку
        }
        
        resultDiv.innerHTML = `<h2>Результат:</h2><p>${message}</p>`;
        resultDiv.style.display = 'block';
    });

    // Обработчик для кнопки перенаправления на сайт
    document.getElementById('doctorSiteButton').addEventListener('click', function() {
        window.location.href = 'https://www.example.com'; // Замените URL на нужный сайт
    });
