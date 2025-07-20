// Script para tooltips de certificaciones y modal
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('certifications-modal');
  const showModalBtn = document.getElementById('show-all-certifications');
  const closeModalBtn = document.getElementById('close-certifications-modal');
  const detailModal = document.getElementById('certification-detail-modal');
  const closeDetailModalBtn = document.getElementById('close-detail-modal');
  
  console.log('Detail modal encontrada:', detailModal);
  console.log('Close button encontrado:', closeDetailModalBtn);
  
  // Datos de las certificaciones
  const certificationData = {
    'intro-cybersecurity': {
      title: 'Introduction to Cybersecurity',
      image: '/images/certificaciones/introduction-to-cybersecurity.png',
      organization: 'Cisco Networking Academy',
      description: 'Esta certificación proporciona una introducción completa al mundo de la ciberseguridad, cubriendo los fundamentos de protección de redes, sistemas y datos. Aprende sobre amenazas comunes, vulnerabilidades y las mejores prácticas para mantener la seguridad digital.',
      skills: [
        'Fundamentos de ciberseguridad',
        'Identificación de amenazas y vulnerabilidades',
        'Principios de protección de redes',
        'Mejores prácticas de seguridad',
        'Conciencia sobre amenazas digitales'
      ],
      date: '2025'
    },
    'cybersecurity-essentials': {
      title: 'Cybersecurity Essentials',
      image: '/images/certificaciones/cybersecurity-essentials.png',
      organization: 'Cisco Networking Academy',
      description: 'Certificación avanzada que profundiza en los aspectos esenciales de la ciberseguridad, incluyendo análisis de riesgos, implementación de controles de seguridad y respuesta a incidentes. Desarrolla habilidades prácticas para proteger infraestructuras críticas.',
      skills: [
        'Análisis de riesgos de seguridad',
        'Implementación de controles de seguridad',
        'Respuesta a incidentes',
        'Protección de infraestructuras críticas',
        'Criptografía y autenticación'
      ],
      date: '2022'
    },
    'ethical-hacker': {
      title: 'Ethical Hacker',
      image: '/images/certificaciones/ethical-hacker.png',
      organization: 'Cisco Networking Academy',
      description: 'Certificación reconocida internacionalmente que capacita en técnicas de hacking ético para identificar vulnerabilidades en sistemas. Aprende metodologías de penetración testing y técnicas de evaluación de seguridad desde la perspectiva del atacante.',
      skills: [
        'Técnicas de hacking ético',
        'Metodologías de penetración testing',
        'Evaluación de vulnerabilidades',
        'Análisis de malware',
        'Técnicas de evasión de seguridad'
      ],
      date: '2025'
    },
    'python-essentials': {
      title: 'Python Essentials 1',
      image: '/images/certificaciones/python-essentials-1.1.png',
      organization: 'Cisco Networking Academy',
      description: 'Certificación que valida conocimientos fundamentales de programación en Python, esencial para automatización de seguridad, análisis de datos y desarrollo de herramientas de ciberseguridad. Cubre sintaxis, estructuras de datos y programación orientada a objetos.',
      skills: [
        'Programación en Python',
        'Automatización de tareas de seguridad',
        'Análisis de datos',
        'Desarrollo de herramientas',
        'Programación orientada a objetos'
      ],
      date: '2023'
    },
    'junior-analyst': {
      title: 'Junior Cybersecurity Analyst Career Path',
      image: '/images/certificaciones/junior-cybersecurity-analyst-career-path.1.png',
      organization: 'Cisco Networking Academy',
      description: 'Ruta de certificación completa que prepara para roles de analista de ciberseguridad junior. Incluye monitoreo de seguridad, análisis de logs, investigación de incidentes y desarrollo de habilidades analíticas para detectar y responder a amenazas.',
      skills: [
        'Monitoreo de seguridad',
        'Análisis de logs y eventos',
        'Investigación de incidentes',
        'Detección de amenazas',
        'Respuesta a incidentes de seguridad'
      ],
      date: '2025'
    },
    'cyber-threat-management': {
      title: 'Cyber Threat Management',
      image: '/images/certificaciones/cyber-threat-management.png',
      organization: 'Cisco Networking Academy',
      description: 'Certificación especializada en la gestión y respuesta a amenazas cibernéticas. Desarrolla habilidades para identificar, analizar y mitigar diferentes tipos de amenazas digitales, incluyendo malware, phishing y ataques avanzados.',
      skills: [
        'Identificación de amenazas cibernéticas',
        'Análisis de malware y ataques',
        'Gestión de incidentes de seguridad',
        'Técnicas de mitigación de amenazas',
        'Respuesta a incidentes cibernéticos'
      ],
      date: '2025'
    },
    'introduction-to-iot': {
      title: 'Introduction to IoT',
      image: '/images/certificaciones/introduction-to-iot.png',
      organization: 'Cisco Networking Academy',
      description: 'Certificación que introduce los fundamentos del Internet de las Cosas (IoT). Cubre conceptos básicos de dispositivos conectados, protocolos de comunicación, seguridad IoT y aplicaciones prácticas en diferentes industrias.',
      skills: [
        'Fundamentos de IoT',
        'Protocolos de comunicación IoT',
        'Seguridad en dispositivos IoT',
        'Arquitectura de sistemas IoT',
        'Aplicaciones industriales de IoT'
      ],
      date: '2022'
    }
  };
  
  // Funciones para las modales
  function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  function openDetailModal(certificationId) {
    const data = certificationData[certificationId];
    if (!data) return;
    
    // Crear modal simple si no existe
    let simpleModal = document.getElementById('simple-detail-modal');
    if (!simpleModal) {
      simpleModal = document.createElement('div');
      simpleModal.id = 'simple-detail-modal';
      simpleModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
      
      const modalContent = document.createElement('div');
      modalContent.style.cssText = `
        background: #1a1a1a;
        padding: 30px;
        border-radius: 12px;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        color: white;
      `;
      
      modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h3 id="simple-title" style="margin: 0; color: white; font-size: 24px;"></h3>
          <span id="simple-close" style="color: #aaa; font-size: 28px; cursor: pointer; font-weight: bold;">&times;</span>
        </div>
        <div style="display: flex; gap: 30px;">
          <div style="flex-shrink: 0;">
            <img id="simple-image" style="width: 120px; height: 120px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);" src="" alt="">
          </div>
                      <div style="flex: 1;">
              <div style="margin-bottom: 25px;">
                <h4 style="margin: 0 0 10px 0; color: #4CAF50; font-size: 18px; font-weight: 500; border-bottom: 1px solid rgba(76, 175, 80, 0.3); padding-bottom: 5px;">Descripción</h4>
                <p id="simple-description" style="margin: 0; color: #e0e0e0; font-size: 15px; line-height: 1.6;"></p>
              </div>
              <div style="margin-bottom: 25px;">
                <h4 style="margin: 0 0 10px 0; color: #4CAF50; font-size: 18px; font-weight: 500; border-bottom: 1px solid rgba(76, 175, 80, 0.3); padding-bottom: 5px;">Organización</h4>
                <p id="simple-organization" style="margin: 0; color: #e0e0e0; font-size: 15px;"></p>
              </div>
              <div style="margin-bottom: 25px;">
                <h4 style="margin: 0 0 10px 0; color: #4CAF50; font-size: 18px; font-weight: 500; border-bottom: 1px solid rgba(76, 175, 80, 0.3); padding-bottom: 5px;">Habilidades Adquiridas</h4>
                <ul id="simple-skills" style="margin: 0; padding-left: 20px; color: #e0e0e0; font-size: 15px; line-height: 1.6;"></ul>
              </div>
              <div>
                <h4 style="margin: 0 0 10px 0; color: #4CAF50; font-size: 18px; font-weight: 500; border-bottom: 1px solid rgba(76, 175, 80, 0.3); padding-bottom: 5px;">Fecha de Obtención</h4>
                <p id="simple-date" style="margin: 0; color: #e0e0e0; font-size: 15px;"></p>
              </div>
            </div>
        </div>
      `;
      
      simpleModal.appendChild(modalContent);
      document.body.appendChild(simpleModal);
      
      // Event listener para cerrar
      document.getElementById('simple-close').addEventListener('click', function() {
        simpleModal.remove();
        document.body.style.overflow = 'auto';
      });
      
      // Cerrar al hacer clic fuera
      simpleModal.addEventListener('click', function(event) {
        if (event.target === simpleModal) {
          simpleModal.remove();
          document.body.style.overflow = 'auto';
        }
      });
    }
    
    // Llenar datos
    document.getElementById('simple-title').textContent = data.title;
    document.getElementById('simple-image').src = data.image;
    document.getElementById('simple-image').alt = data.title;
    document.getElementById('simple-description').textContent = data.description;
    document.getElementById('simple-organization').textContent = data.organization;
    document.getElementById('simple-date').textContent = data.date;
    
    // Llenar habilidades
    const skillsList = document.getElementById('simple-skills');
    skillsList.innerHTML = '';
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });
    
    // Mostrar modal
    simpleModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  function closeDetailModal() {
    detailModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  // Event listeners para la modal principal
  if (showModalBtn) {
    showModalBtn.addEventListener('click', openModal);
  }
  
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }
  
  // Event listeners para la modal de descripción
  if (closeDetailModalBtn) {
    closeDetailModalBtn.addEventListener('click', closeDetailModal);
  }
  
  // Cerrar modales al hacer clic fuera
  if (modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }
  
  if (detailModal) {
    detailModal.addEventListener('click', function(event) {
      if (event.target === detailModal) {
        closeDetailModal();
      }
    });
  }
  
  // Event listeners para las insignias del header
  const headerBadges = document.querySelectorAll('.certifications .certification-badge[data-certification]');
  console.log('Header badges encontradas:', headerBadges.length);
  headerBadges.forEach(function(badge) {
    console.log('Agregando event listener a:', badge.getAttribute('data-certification'));
    badge.addEventListener('click', function(event) {
      console.log('Clic en badge del header:', this.getAttribute('data-certification'));
      event.preventDefault();
      event.stopPropagation();
      const certificationId = this.getAttribute('data-certification');
      openDetailModal(certificationId);
    });
  });
  
  // Event listeners para las certificaciones en la modal
  const modalItems = document.querySelectorAll('.certification-item');
  modalItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      const certificationId = this.getAttribute('data-certification');
      openDetailModal(certificationId);
    });
  });
  
  // Cerrar modales con Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      if (detailModal.style.display === 'block') {
        closeDetailModal();
      } else if (modal.style.display === 'block') {
        closeModal();
      }
    }
  });
  
  // Tooltips para todas las insignias
  const allBadges = document.querySelectorAll('.certification-badge, .certification-badge-modal');
  allBadges.forEach(function(badge) {
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
  
  // Tooltips para el cuadrado "+X"
  const certificationMore = document.querySelectorAll('.certification-more');
  certificationMore.forEach(function(more) {
    const tooltipText = more.getAttribute('title');
    
    // Crear el tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'certification-tooltip';
    tooltip.textContent = tooltipText;
    
    // Crear la flecha del tooltip
    const arrow = document.createElement('div');
    arrow.className = 'certification-tooltip-arrow';
    
    // Agregar tooltip y flecha al elemento
    more.appendChild(tooltip);
    more.appendChild(arrow);
    
    // Eventos de hover
    more.addEventListener('mouseenter', function() {
      tooltip.style.opacity = '1';
      tooltip.style.visibility = 'visible';
      arrow.style.opacity = '1';
      arrow.style.visibility = 'visible';
    });
    
    more.addEventListener('mouseleave', function() {
      tooltip.style.opacity = '0';
      tooltip.style.visibility = 'hidden';
      arrow.style.opacity = '0';
      arrow.style.visibility = 'hidden';
    });
  });
}); 