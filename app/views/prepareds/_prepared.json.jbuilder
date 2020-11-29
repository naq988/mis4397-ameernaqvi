json.extract! prepared, :id, :image, :title, :description, :button, :created_at, :updated_at
json.url prepared_url(prepared, format: :json)
