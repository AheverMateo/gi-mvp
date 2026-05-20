import location from "../assets/ItemsDashboard/ubicacion.png";
import settings from "../assets/ItemsDashboard/Frame.png";
import web from "../assets/ItemsDashboard/earth.png";
import linkedin from "../assets/Linkedin.png";
import dollar from "../assets/money.png";
import msjBlue from "../assets/messajeBlue.png";
import portafolio from "../assets/Sidebar/Portafolio.png";
import useEditableField from "../hook/useEditableField";
import EditableField from "./EditableField";

const UserEdit = () => {
  const ubicacion = useEditableField();
  const idiomas = useEditableField();
  const industrias = useEditableField();
  const sitioWeb = useEditableField();
  const linkedinField = useEditableField();
  const portfolio = useEditableField();
  const precioHora = useEditableField();

  return (
    <div className="flex h-full flex-col justify-evenly">
      <div>
        <EditableField
          icon={location}
          iconClassName="w-2 h-3"
          label="Ciudad, Pais"
          placeholder="Ciudad, Pais"
          value={ubicacion.value}
          editing={ubicacion.editing}
          onChange={ubicacion.setValue}
          onSave={ubicacion.save}
          onEdit={ubicacion.startEditing}
        />
        <EditableField
          icon={msjBlue}
          iconClassName="w-3 h-3"
          label="Idioma/s que hablo"
          placeholder="Ej: Español, Inglés"
          value={idiomas.value}
          editing={idiomas.editing}
          onChange={idiomas.setValue}
          onSave={idiomas.save}
          onEdit={idiomas.startEditing}
        />
        <EditableField
          icon={settings}
          iconClassName="w-3 h-3"
          label="Industrias Preferentes"
          placeholder="Ej: Tecnología, Finanzas"
          value={industrias.value}
          editing={industrias.editing}
          onChange={industrias.setValue}
          onSave={industrias.save}
          onEdit={industrias.startEditing}
        />
      </div>

      <div>
        <EditableField
          icon={web}
          iconClassName="w-3 h-3"
          label="Sitio Web"
          placeholder="https://www.tusitioweb.com"
          value={sitioWeb.value}
          editing={sitioWeb.editing}
          previewLabel="Mi Sitio Web"
          isLink
          onChange={sitioWeb.setValue}
          onSave={sitioWeb.save}
          onEdit={sitioWeb.startEditing}
        />
        <EditableField
          icon={linkedin}
          iconClassName="w-[10px] h-[10px]"
          label="LinkedIn"
          placeholder="https://www.linkedin.com/perfil"
          value={linkedinField.value}
          editing={linkedinField.editing}
          previewLabel="Mi LinkedIn"
          isLink
          onChange={linkedinField.setValue}
          onSave={linkedinField.save}
          onEdit={linkedinField.startEditing}
        />
        <EditableField
          icon={portafolio}
          iconClassName="w-3 h-3"
          label="Portfolio Web"
          placeholder="https://www.tuportfolio.com"
          previewLabel="Mi Portfolio"
          isLink
          value={portfolio.value}
          editing={portfolio.editing}
          onChange={portfolio.setValue}
          onSave={portfolio.save}
          onEdit={portfolio.startEditing}
        />
      </div>

      <div>
        <EditableField
          icon={dollar}
          iconClassName="w-3 h-3"
          label="Precio/hora: (en USD)"
          placeholder="USD"
          prefix="Precio/hora: USD"
          value={precioHora.value}
          editing={precioHora.editing}
          onChange={precioHora.setValue}
          onSave={precioHora.save}
          onEdit={precioHora.startEditing}
        />
      </div>
    </div>
  );
};

export default UserEdit;
