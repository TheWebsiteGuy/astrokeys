const Button = ({ link, label, style, size, icon }) => {
  const sizeClasses = {
    default: '',
    large: 'btn-lg',
    small: 'btn-sm',
    tiny: 'btn-xs',
    wide: 'btn-wide',
  };

  return (
    <button
      className={`
        btn 
        ${style === 'primary' ? 'btn-primary' : ''}
        ${style === 'secondary' ? 'btn-secondary' : ''}
        ${style === 'accent' ? 'btn-accent' : ''}
        ${style === 'info' ? 'btn-info' : ''}
        ${style === 'success' ? 'btn-success' : ''}
        ${style === 'warning' ? 'btn-warning' : ''}
        ${style === 'error' ? 'btn-error' : ''}
        ${style === 'outline' ? 'btn-outline' : ''}
        ${style === 'ghost' ? 'btn-ghost' : ''}
        ${style === 'link' ? 'btn-link' : ''}
        ${sizeClasses[size] || ''}
      `}
    
    >   
    {icon && ( 
        <span dangerouslySetInnerHTML={{ __html: icon }} /> 
      )}
      <a href={link}>{label}</a>
    </button>
  );
};

export default Button;
