class AddArtistToCtypes < ActiveRecord::Migration[5.2]
  def change
    add_column :ctypes, :artist, :text
  end
end
