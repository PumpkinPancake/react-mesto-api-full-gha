import React from "react";
import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, handleClick, onUpdateAvatar }) {
  const updateAvatar = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: updateAvatar.current.value,
    });

    updateAvatar.current.value = "";
  }

  return (
    <PopupWithForm
      submitButtonText="Создать"
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      handleClick={handleClick}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          name="avatar"
          type="url"
          className="popup__input popup__input_text_type-avatar"
          placeholder="Ссылка на картинку"
          required
          id="avatar-input"
          ref={updateAvatar}
        />
        <span className="popup__input-error avatar-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
