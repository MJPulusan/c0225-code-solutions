const $tabContainer = document.querySelector('.tab-container') as HTMLElement;
const $tab = document.querySelectorAll('.tab') as NodeListOf<HTMLElement>;
const $view = document.querySelectorAll('.view') as NodeListOf<HTMLElement>;

if (!$tabContainer) throw new Error('$tabContainer does not exists');
if (!$tab) throw new Error('$tab does not exists');
if (!$view) throw new Error('$view does not exists');

$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    $tab.forEach(($tab) => {
      if ($tab === $eventTarget) {
        $tab.className = 'tab active';
      } else {
        $tab.className = 'tab';
      }
    });

    if ($eventTarget.matches('.tab')) {
      const $viewID = $eventTarget.getAttribute('data-view');

      console.log('Selected View ID:', $viewID);

      $view.forEach(($view) => {
        const $viewData = $view.getAttribute('data-view');
        if ($viewData === $viewID) {
          $view.className = 'view';
        } else {
          $view.className = 'view hidden';
        }
      });
    }
  }
});
