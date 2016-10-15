require 'active_record'
#
class CreateTraineeTable < ActiveRecord::Migration[5.0]
  def up
    create_table :trainees do |t|
      t.string :currentform
      t.string :finalform
      t.integer :trainnumber
    end
  end

  def down
    drop_table :trainees
  end
end

def main
  action = (ARGV[0] || :up).to_sym

  CreateTraineeTable.migrate(action)
end

main if __FILE__ == $PROGRAM_NAME
