"use strict";
const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
if (!$tabContainer)
    throw new Error('$tabContainer does not exists');
if (!$tab)
    throw new Error('$tab does not exists');
if (!$view)
    throw new Error('$view does not exists');
$tabContainer.addEventListener('click', (event) => {
    const $eventTarget = event.target;
    if ($eventTarget.matches('.tab')) {
        $tab.forEach(($tab) => {
            if ($tab === $eventTarget) {
                $tab.className = 'tab active';
            }
            else {
                $tab.className = 'tab';
            }
        });
        const $viewID = $view.getAttribute('data-view');
        console.log('Selected View ID:', $viewID);
        if ($viewID === $eventTarget) {
            $viewID.className = 'view hidden';
        }
        else {
            $viewID.className = 'view';
        }
    }
});
;
