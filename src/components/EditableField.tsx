import edit from "../assets/edit.png";

interface EditableFieldProps {
  icon: string;
  iconClassName?: string;
  label: string;
  placeholder: string;
  value: string;
  editing: boolean;
  onChange: (val: string) => void;
  onSave: (val: string) => void;
  onEdit: () => void;
  isLink?: boolean;
  previewLabel?: string;
  prefix?: string;
}

const EditableField = ({
  icon,
  iconClassName = "w-3 h-3",
  label,
  placeholder,
  value,
  editing,
  onChange,
  onSave,
  onEdit,
  isLink,
  previewLabel,
  prefix
}: EditableFieldProps) => (
  <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5">
    <div className="flex items-center gap-4 flex-1">
      <img className={iconClassName} src={icon} alt="" />
      {editing ? (
        <input
          autoFocus
          value={value}
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onBlur={() => onSave(value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") onSave(value);
          }}
          className="w-full h-[30px] border border-[#1F1F1F] px-3 text-[#1F1F1F] outline-none placeholder:text-[#8B8B8B] text-xs"
        />
      ) : isLink && value ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#DDF3F5] flex justify-center items-center rounded-full h-[28px] px-4 text-xs"
        >
          {previewLabel}
        </a>
      ) : (
        <p
          className={
            value
              ? "text-base text-[#1F1F1F]"
              : "text-sm text-[#083287] font-bold"
          }
        >
          {value ? `${prefix ? prefix + " " : ""}${value}` : label}
        </p>
      )}
    </div>

    {!editing && (
      <button onClick={onEdit}>
        <img className="cursor-pointer" src={edit} alt="Edit" />
      </button>
    )}
  </div>
);

export default EditableField;
