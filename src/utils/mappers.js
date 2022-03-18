export const mapUser = (model) => ({
    id: model.id,
    name: `${model.first_name} ${model.last_name || ''}`.trim(),
    username: model.username,
    avatarUrl: model.profile_image.medium,
});

export const mapPhoto = (model) => ({
    id: model.id,
    url: model.urls.regular,
    user: mapUser(model.user),
});

export const mapPhotos = (models) => models.map(mapPhoto);
