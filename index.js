document.addEventListener('DOMContentLoaded', function () {
    // Holen Sie alle Radio-Buttons mit der Klasse 'selectAll'
    var selectAllRadios = document.querySelectorAll('.selectAll');

    // Fügen Sie jedem Radio-Button einen Event-Listener hinzu
    selectAllRadios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            // Holen Sie die entsprechende Zeile für den geklickten Radio-Button
            var row = this.parentNode.parentNode;

            // Holen Sie alle Checkboxen in der Zeile
            var checkboxes = row.querySelectorAll('input[type="checkbox"]');

            // Setzen Sie den Zustand der Checkboxen basierend auf dem ausgewählten Radio-Button
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = radio.checked;
            });
        });
    });
});