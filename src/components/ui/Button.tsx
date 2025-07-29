interface ButtonProps {
  link: string;
  label: string;
  style: 'primary' | 'secondary' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
  type: 'ghost' | 'link' | 'outline' | 'disabled' | '';
  size: 'default' | 'large' | 'small' | 'tiny' | 'wide' | '';
  icon?: string;
}

const Button = ({ link, label, style, type, size, icon }: ButtonProps) => {
  const sizeClasses: Record<string, string> = {
    '': '',
    default: '',
    large: 'btn-lg',
    small: 'btn-sm',
    tiny: 'btn-xs',
    wide: 'btn-wide',
  };

  const typeClasses: Record<string, string> = {
    '': '',
    ghost: 'btn-ghost',
    link: 'btn-link',
    outline: 'btn-outline',
    disabled: 'btn-disabled',
  };

  return (
    <button
      className={`
        btn 
        ${style === 'primary' ? 'btn-primary' : ''}
        ${style === 'secondary' ? 'btn-secondary' : ''}
        ${style === 'neutral' ? 'btn-neutral' : ''}
        ${style === 'info' ? 'btn-info' : ''}
        ${style === 'success' ? 'btn-success' : ''}
        ${style === 'warning' ? 'btn-warning' : ''}
        ${style === 'error' ? 'btn-error' : ''}
        ${typeClasses[type] || ''}
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
