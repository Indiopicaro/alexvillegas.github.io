// Script para tooltips de certificaciones
document.addEventListener('DOMContentLoaded', function() {
  const certificationBadges = document.querySelectorAll('.certification-badge');
  
  certificationBadges.forEach(function(badge) {
    const tooltipText = badge.getAttribute('title') || badge.getAttribute('alt');
    
    // Crear el tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'certification-tooltip';
    tooltip.textContent = tooltipText;
    
    // Crear la flecha del tooltip
    const arrow = document.createElement('div');
    arrow.className = 'certification-tooltip-arrow';
    
    // Agregar tooltip y flecha al badge
    badge.appendChild(tooltip);
    badge.appendChild(arrow);
    
    // Eventos de hover
    badge.addEventListener('mouseenter', function() {
      tooltip.style.opacity = '1';
      tooltip.style.visibility = 'visible';
      arrow.style.opacity = '1';
      arrow.style.visibility = 'visible';
    });
    
    badge.addEventListener('mouseleave', function() {
      tooltip.style.opacity = '0';
      tooltip.style.visibility = 'hidden';
      arrow.style.opacity = '0';
      arrow.style.visibility = 'hidden';
    });
  });
}); 