import React from 'react';
import './Proyectos.css';

const proyectosData = [
  {
    nombre: 'Landing Page moderna',
    descripcion: 'Página de presentación con diseño moderno y responsivo.',
    link: '#',
  },
  {
    nombre: 'Dashboard interactivo',
    descripcion: 'Panel de control con gráficos y filtros dinámicos.',
    link: '#',
  },
  {
    nombre: 'Blog personal',
    descripcion: 'Blog con sistema de comentarios y panel de administración.',
    link: '#',
  },
  {
    nombre: 'Aplicación de tareas',
    descripcion: 'App para gestionar tareas con autenticación y notificaciones.',
    link: '#',
  },
];

const Proyectos = () => (
  <div className="proyectos-page">
    <h1>Mis Proyectos</h1>
    <ul>
      {proyectosData.map((proyecto, idx) => (
        <li key={idx} className="proyecto-item">
          <h2>{proyecto.nombre}</h2>
          <p>{proyecto.descripcion}</p>
          <a href={proyecto.link} target="_blank" rel="noopener noreferrer">Ver más</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Proyectos;
